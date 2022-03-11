import {screen, render} from "@testing-library/react"
import Home from "./Home";
import response from "./data"

import {rest} from "msw";
import {setupServer} from "msw/node";

const endpointUrl = "https://randomuser.me/api/?results=3&seed=a931c9e6df8fb490";

const usersResponse = rest.get(endpointUrl,(req,res,ctx)=>{
  return res(ctx.json(response))
})

const server = new setupServer(usersResponse);


beforeAll(() => server.listen());
afterEach(()=>server.resetHandlers());
afterAll(()=>server.close());

test("it should have the user displayed", async ()=> {
  render (<Home />)
  const user = await screen.findByText("Gutierrez")
  expect(user).toBeVisible();
})