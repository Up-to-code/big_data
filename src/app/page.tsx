import Home_page from "@/components/page/Home_page";
import Show from "../components/common/Viwer";
import Top from "@/components/common/Top";
// import News from "@/components/common/News";

import React from 'react';

function Home() {
  return (
    <>
      <Top />
      <Home_page />
      <Show />
    </>
  );
}

export default Home;
