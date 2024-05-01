import { AwesomeButton } from "react-awesome-button";
import { Fade } from "react-awesome-reveal";
import { BsDiscord, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <div className="flex flex-col h-full px-3 overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white transition-all duration-300">
      <div className="flex flex-col items-center justify-center w-full md:min-h-full gap-10 mb-[80px] md:mb-2 mt-24 md:mt-2">
        <div className="max-w-[650px] items-center justify-center flex flex-col gap-10 text-left relative">
          <Fade delay={1000} triggerOnce={true}>
            <h1 className="dark:text-[#cacaca] uppercase md:text-[2.625em] text-[2em] font-extrabold text-[#434343]">
              Get in touch
            </h1>
          </Fade>
          <Fade
            delay={1300}
            triggerOnce={true}
            className="flex items-center justify-center w-full text-center"
          >
            <small className="dark:text-[#9a9a9a] text-[#6e6e6e]">
              {`If you want to get in touch, talk to me about a project collaboration, or just say hi, please send an email to `}
              <a
                href="mailto:mateo.kova0510@gmail.com"
                className="text-2xl dark:text-[#bbbbbb] transition-all duration-300 dark:hover:text-white text-[#787878] hover:text-[#020202]"
              >
                {" "}
                shinjirohara2@gmail.com
                {"  "}
              </a>
              and let's talk.
            </small>
          </Fade>
          <div className="w-full">
            <Fade delay={1500} triggerOnce={true}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12924.852438228863!2d140.5596252198633!3d35.91728338808108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022f8914ff65345%3A0xeebf7dccbaa951da!2sIchiwada%2C%20Katori%2C%20Chiba%20287-0804%2C%20Japan!5e0!3m2!1sen!2s!4v1714338652346!5m2!1sen!2s"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                className="min-h-[300px]"
              />
            </Fade>
          </div>
          <Fade delay={1700} triggerOnce={true}>
            <h1 className="dark:text-[#cacaca] uppercase text-[1.25em] font-extrabold text-[#434343]">
              Let's get social
            </h1>
            <p className="dark:text-[#9a9a9a] text-center md:text-left text-sm text-[#747474]">
              Follow profiles on GitHub and Linkedin.
            </p>
          </Fade>

          <Fade delay={1900} triggerOnce={true}>
            <div className="grid items-center justify-center grid-cols-2 gap-5 md:grid-cols-4">
              <AwesomeButton type="linkedin" href={socialLinks.linkedin}>
                <span className="flex items-center justify-center gap-1">
                  <BsLinkedin size={20} />
                  <span className="text-sm font-light uppercase">Linkedin</span>
                </span>
              </AwesomeButton>
              <AwesomeButton type="instagram" href={socialLinks.discord}>
                <span className="flex items-center justify-center gap-1">
                  <BsDiscord size={20} />
                  <span className="text-sm font-light uppercase">Discord</span>
                </span>
              </AwesomeButton>
              <AwesomeButton type="github" href={socialLinks.github}>
                <span className="flex items-center justify-center gap-1">
                  <BsGithub size={20} />
                  <span className="text-sm font-light uppercase">Github</span>
                </span>
              </AwesomeButton>
              <AwesomeButton type="twitter" href={socialLinks.telegram}>
                <span className="flex items-center justify-center gap-1">
                  <BsTelegram size={20} />
                  <span className="text-sm font-light uppercase">Telegram</span>
                </span>
              </AwesomeButton>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
