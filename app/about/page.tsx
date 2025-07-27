import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl
      border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">

          <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white
          rounded-full duration-300 mb-5 cursor-pointer">
              Back <BsArrowLeft className="ml-2"/>
          </Button>
          </Link>

          <div className="spaze-y-6">
              <h1 className="text-4xl bg-clip-text font-bold text-transparent
               bg-gradient-to-r from-emerald-400" >
                  About Me
              </h1>

              <div className="space-y-4 text-neutral-200 text-pretty tracking-tight mt-3">
                  <p>
                    I'm a third-year B.Tech student (2026 batch) from the Metallurgical and Materials Engineering department at VNIT Nagpur, 
                    currently preparing for roles in Software Development Engineering (SDE).<br/> <br/>With a strong foundation in Data Structures and Algorithms,
                     I’ve solved over 400 problems across platforms like LeetCode and GeeksforGeeks. On the development side,
                      I’m skilled in Python, C/C++, HTML, CSS, and JavaScript, and I’m actively building projects using React and Tailwind CSS
                       to create responsive and modern web applications.<br/> <br/>I’m passionate about technology, eager to learn,
                        and always open to feedback and mentorship to improve and grow as a developer.
                         This portfolio reflects my journey, skills, and the projects that showcase my learning and progress.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="text-2xl bg-clip-text font-bold text-transparent
                  bg-gradient-to-r from-emerald-400 to-blue-500 mt-5">
                        Education
                  </h2>
                  <div className="space-y-2">
                      <p className="font-medium">
                          Bachelor of Metallurgical & Materials Engineering
                      </p>
                      <p className="text-neutral-500">
                          Nagpur India, 2022-2026
                      </p>
                  </div>

                    <div className="space-y-2">
                      <p className="font-medium">
                          St. Peter's Junior College
                      </p>
                      <p className="text-neutral-500">
                          Mumbai India, 2019-2021
                      </p>
                  </div>

                  <div className="space-y-2">
                      <p className="font-medium">
                          Mother Mary's English High School
                      </p>
                      <p className="text-neutral-500">
                          Mumbai India, 2008-2019
                      </p>
                  </div>

              </div>

              {/* <div className="space-y-4">
                  <h2 className="text-2xl bg-clip-text font-bold
                  text-transparent bg-gradient-to-r from-emerald-400
                  to-blue-500">
                      Professional Experience
                  </h2>

                  <div>
                    <p className="font-medium"></p>
                  </div>

              </div> */}

          </div>

      </main>

    </div>
  )
}

export default page
