import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Pcard } from "../components/Pcard"
import { Acard } from "../components/Acard"
import { Form } from "../components/Form"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />

      <motion.div id="gallery" className="flex flex-col justify-center items-center font-sans py-20 text-[#1C352D]! gap-8 shadow-md" 
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mx-4">See my gillimpes</h2>

        <motion.div className="flex flex-row gap-4 mx-4" initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }}>
          <Pcard src="assets/img_1.jpeg" title="Project 1" description="Description of Project 1" />
          <Pcard src="assets/img_2.jpeg" title="Project 2" description="Description of Project 2" className="hidden md:flex" />
          <Pcard src="assets/img_1.jpeg" title="Project 5" description="Description of Project 5" className="hidden md:flex" />
        </motion.div>
        <motion.div className="flex flex-row gap-4 mx-4" initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }}>
          <Pcard src="assets/img_3.jpeg" title="Project 3" description="Description of Project 3" />
          <Pcard src="assets/img_4.jpeg" title="Project 4" description="Description of Project 4" className="hidden md:flex" />
          <Pcard src="assets/img_3.jpeg" title="Project 6" description="Description of Project 6" className="hidden md:flex" />
        </motion.div>

      </motion.div>

      <motion.div id="about" className="flex flex-col justify-center items-center font-sans py-20 text-[#1C352D]! gap-8 mx-4 shadow-md" initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }}> 
        <h2 className="text-4xl font-bold mb-4">About the Photographer</h2>
        <Acard title="Hey, it's Rahul Sharma" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ipsa consectetur voluptas minus asperiores perspiciatis, molestiae vero consequatur doloribus aut provident perferendis adipisci sapiente repudiandae fugiat. Eaque consequuntur rerum illum!" />
      </motion.div>

      <motion.div id="contact" className="flex flex-col justify-center items-center font-sans py-20 text-[#1C352D]! gap-8 mx-4 shadow-md" initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }}> 
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <Form />
      </motion.div>

    </div>
  )
}

export default Home 
