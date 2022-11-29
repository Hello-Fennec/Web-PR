import React from "react";
import Card from "./components/card";
import SearchBar from "./components/search-bar";
import { projects } from "./utils/projects";

export default function StudentProjects() {
  const [searchTerm, setSearchTerm] = React.useState("");
 

  return (
    <>
      <div className=" max-w-6xl lg:max-w-xl xs:max-w-xs m-auto p-5 py-16 mb-10">
        <div className="flex items-center mb-5 justify-between lg:flex-col ">
          <h1 className="text-2xl font-bold text-left">
            HelloWorld Fennec's student projects
          </h1>
          <div className="flex lg:w-full">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 gap-4">
          {projects
            .filter((project) =>
              project.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(({ groupNum, name, link, img, github, figma }) => {
              return (
                <Card
                  groupNum={groupNum}
                  name={name}
                  link={link}
                  img={img}
                  github={github}
                  figma={figma}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
