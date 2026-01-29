import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <>   
      <motion.div id="hero" className="flex flex-col justify-center items-center font-sans py-20 text-[#1C352D]! gap-8 shadow-md mt-12"
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center flex justify-center items-center flex-col gap-4">
          <img src="/assets/photo_1.jpg" alt="" className="size-16 shadow-lg rounded-xl" />
          <h1 className="text-5xl font-bold mb-4">Rahul Sharma</h1>
          <p className="text-3xl font-semibold mb-6">Content Creator & Photographer</p>
        </div>

        <div className="flex flex-row gap-4">    
          <button className="bg-[#FEA405]! text-[#1C352D]! font-semibold text-xl px-6 py-2 rounded-3xl hover:opacity-90 transition duration-300">Get in touch</button>
          <button className="bg-[#FEA405]! text-[#1C352D]! font-semibold text-xl px-6 py-2 rounded-3xl hover:opacity-90 transition duration-300">See My Work</button>
        </div>
      </motion.div>

     
    </>
  );
};

 
