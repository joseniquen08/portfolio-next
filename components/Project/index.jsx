import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Content } from "./Content";
import { Header } from "./Header";

export const ProjectComponent = ({ id }) => {

  const { data } = useSWR(`/api/projects/${id}`, fetcher);

  return (
    <div className="flex flex-col w-full px-2 lg:px-16 py-10 mx-auto max-w-6xl space-y-6">
      <Header data={data}/>
      <Content data={data}/>
    </div>
  )
}
