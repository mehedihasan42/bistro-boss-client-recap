import React from "react";
import backgroundImage from '../../../assets/home/chef-special.jpg'

const About = () => {
  return (
    <div className="bg-cover bg-center h-96 italic" style={{backgroundImage:`url(${backgroundImage})`}}>
     <div className="text-black text-center bg-white w-2/4 absolute mt-14 ml-64 p-20 space-y-4">
     <h2 className="font-bold text-3xl">Bistro Boss</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        libero accusamus laborum deserunt ratione dolor officiis praesentium!
        Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus
        incidunt quibusdam nemo.
      </p>
     </div>
    </div>
  );
};

export default About;
