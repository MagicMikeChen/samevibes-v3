import type { NextPage } from "next";
import Head from "next/head";
import NotFoundPage from "../src/components/NotFoundPage";
const NotFound: NextPage = () => {
  return (
    <div className="relative">
      <NotFoundPage></NotFoundPage>
    </div>
  );
};

export default NotFound;
