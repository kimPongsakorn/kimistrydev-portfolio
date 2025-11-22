import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { todoId } = req.query;

  if (req.method === "PUT") {
    // update todo
    const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const todo = await prisma.todo.update({
      where: { id: todoId as string },
      data,
    });

    res.json(todo);
  } else if (req.method === "DELETE") {
    // delete todo
    await prisma.todo.delete({ where: { id: todoId as string } });

    res.json({ status: "ok" });
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

