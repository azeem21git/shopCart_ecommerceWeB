import { Button } from "@/components/ui/button";
import React from "react";
import Container from "@/components/ui/Container";
const Home =() =>{
  return (
  <Container className=" bg-shop_light_pink">
    <h2 className="text-xl font-semibold">Home</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sint perferendis consequuntur veritatis omnis consectetur, mollitia inventore amet, ullam ipsum minus cumque iure dolorem quia minima aliquam. Magni numquam repudiandae eveniet reiciendis consequatur? Autem adipisci blanditiis nostrum dicta, architecto neque non a aspernatur, voluptate voluptates dolor ipsa cum dignissimos! Nam.
    </p>
    <Button size="lg">Chek out</Button>
  </Container>
);
};

export default Home;