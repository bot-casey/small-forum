import express, { Router, Request, Response, Express } from "express";
import { isNumberObject } from "util/types";
const router: Router = express.Router();

router
    .route("/content")
    .get((req: Request, res: Response) => {
        res.send("content")
            .status(200)
    })

router
    .route("/comments")
    .get((req: Request, res: Response) => {
        if ( isNumberObject(req.query.id) ) {
            res.send("Bad request")
                .status(400)
        } else {
            res.send("some comments " + req.query.id)
                .status(200)
        }
    })

export default router;