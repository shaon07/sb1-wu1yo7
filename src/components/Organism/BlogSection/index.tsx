import { Check, MoveUpRight } from "lucide-react";
import Button from "../../Atoms/Button";

export default function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-black dark:text-gray-400 mb-2">Read Our Blog</p>
        <h2 className="text-3xl text-black dark:text-white font-bold text-center mb-12">
          Read Daily news about
          <br />
          startup companies
        </h2>

        <div className="bg-white dark:bg-velbetRed pb-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 border border-gray-300 dark:border-lightRed rounded-md p-6">
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80"
              alt="Blog post"
              className="rounded-lg w-full h-64 object-cover"
            />
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-black dark:text-white font-bold mb-4">
                  Not Another Framework
                </h3>
                <p className="text-black dark:text-gray-400 mb-6">
                  We brought all the Remix goodies over to React Router and made
                  improvements in the process. Now it's time to bring those
                  improved APIs back over to Remix where they started!
                </p>
              </div>

              <div className="flex items-center justify-between text-black dark:text-gray-400">
                <div className="flex flex-col">
                  <span className="flex items-center gap-2">
                    <Check
                      size={15}
                      color="black"
                      className="bg-red-500 rounded-full"
                    />
                    Collaboration Tools
                  </span>

                  <span className="flex items-center gap-2">
                    <Check
                      size={15}
                      color="black"
                      className="bg-red-500 rounded-full"
                    />
                    Development
                  </span>
                </div>

                <div>
                  <MoveUpRight
                    size={30}
                    color="red"
                    className="bg-black dark:bg-white rounded-full p-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-12">
            <Button className="mx-auto group flex items-center bg-velbetRed text-white border border-white py-2 px-3">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
