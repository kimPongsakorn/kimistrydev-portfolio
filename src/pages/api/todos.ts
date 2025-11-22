import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // get all todos
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(todos);
  } else if (req.method === "POST") {
    // create todo
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const text = body.text;
    const todo = await prisma.todo.create({
      data: { text, completed: false },
    });

    res.json(todo);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

