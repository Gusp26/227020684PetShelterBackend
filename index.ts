import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import {router as cats} from "./routes/cats";
import cors from '@koa/cors';

const app: Koa = new Koa();
const router: Router = new Router();
const welcomeAPI = async (ctx: RouterContext, next: any) => {
 ctx.body = {
 message: "Welcome to the Cat Shelter !"
 };
 await next();
}

router.get('/api/v1', welcomeAPI);
app.use(logger());
app.use(json());
app.use(router.routes());
app.listen(10888);

app.use(cats.routes());
app.use(cors());