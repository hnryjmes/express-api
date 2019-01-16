import { Request, Response } from "express";

export const hi = (req: Request, res: Response) => {
  res.send("hello");
};

export const hello = (req: Request, res: Response) => {
  res.send("how are you?");
};

export const awesome = (req: Request, res: Response) => {
  res.send("I'm feeling awesome");
};
