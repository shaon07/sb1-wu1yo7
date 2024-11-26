import { Users, Eye, TrendingUp, ArrowRight } from "lucide-react";
import Input from "../../Atoms/Input";
import SelectBox from "../../Atoms/SelectBox";
import { companySizes } from "../../../resources";
import Textarea from "../../Atoms/TextArea";
import Button from "../../Atoms/Button";

export default function ContactForm() {
  return (
    <section className="pb-20 px-4 bg-white dark:bg-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-in">
            <p className="text-dark dark:text-gray-400">Got a project in mind?</p>
            <h2 className="text-3xl text-dark dark:text-white font-bold mb-4">Reserve a Call</h2>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 group">
                <Users className="h-5 w-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-dark dark:text-gray-400 group-hover:text-gray-300 transition-colors">
                  An in depth session to understand your needs
                </span>
              </li>

              <li className="flex items-center text-gray-400 group">
                <TrendingUp className="h-5 w-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-dark dark:text-gray-400 group-hover:text-gray-300 transition-colors">
                  Learn which plan is right for your team
                </span>
              </li>

              <li className="flex items-center text-gray-400 group">
                <Eye className="h-5 w-5 text-red-500 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-dark dark:text-gray-400 group-hover:text-gray-300 transition-colors">
                  Get onboarding help
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <p className="text-black dark:text-gray-400 ">Technical Support or some query?</p>
              <p className="flex items-center gap-1 text-black dark:text-gray-400 ">
                Contact support <ArrowRight size={15} />
              </p>
            </div>
          </div>

          <div className="flex flex-col border border-gray-300 dark:border-lightRed rounded-md">
            <h4 className="p-4 text-dark dark:text-white border-b border-gray-300 dark:border-lightRed">Tell Us About Your Self</h4>
            
            {/* contact form  */}
            <form className="space-y-4 fade-in p-4">
              <Input label="Full Name" />
              <Input label="Work Email" type="email" />
              <SelectBox options={companySizes} label="Company Size" />

              <Textarea rows={4} label="How Can We Help?" />

              <div className="flex items-center justify-between">
                <div className="flex flex-col text-dark dark:text-white font-medium text-base">
                  <span>You can also email us At:</span>
                  <span>apac@redtilt.team</span>
                </div>
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
