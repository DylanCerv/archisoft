import ButtonCallToAction from "@/components/ButtonCallToAction";
import CardTestimonial from "@/components/CardTestimonial";
import MiniCardProject from "@/components/MiniCardProject";
import NavBar from "@/components/NavBar";
import SectionContainer from "@/components/SectionContainer";
import StepsContainer from "@/components/StepsContainer";
import Image from "next/image";
import { DATA } from '@/data/data';
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CircleGradient from "@/components/CircleGradient";
import IconRectagule from "@/components/IconRectagule";
import ContactUsForm from "@/components/ContactUsForm";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <svg className="absolute -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#a2d9ff3A" fillOpacity="1" d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,90.7C840,128,960,224,1080,266.7C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <NavBar />

        <SectionContainer id="home" className="relative text-center bg-blacks">
          <div className="space-y-4">
            <h1 className="font-extrabold text-3xl mx-auto sm:text-4xl md:text-6xl md:w-[80%]">
              {DATA.mainSection.title}
            </h1>
            <p className="text-sm mx-auto md:text-lg md:w-[50%]">
              {DATA.mainSection.description}
            </p>
          </div>
          <ButtonCallToAction href="/#services" text="Our Services" className="mx-auto mt-6" />

          <div className="relative w-fit mx-auto">
            <div className="relative z-10 p-2 h-auto mt-10">
              <Image
                className="rounded-3xl mx-auto"
                src='/img/teamwork.jpeg'
                width={600}
                height={600}
                alt="m"
              />
            </div>
            <IconRectagule
              className="absolute top-0 right-0"
              color="#FF6E1A"
            />
            <IconRectagule
              className="absolute bottom-0 left-0"
              color="#E2E2E2"
            />
          </div>

          <div>
            <CircleGradient
              colorTop="#4485FFcc"
              colorBottom="#377DFF"
              size="20px"
              className="top-40 left-0"
            />
            <CircleGradient
              colorTop="#4485FFcc"
              colorBottom="#377DFF"
              size="20px"
              className="hidden md:block right-40 top-80"
            />
            <CircleGradient
              colorTop="#FF8E8E"
              colorBottom="#F62424"
              size="20px"
              className="right-0 top-0"
            />
            <CircleGradient
              colorTop="#FF8E8E"
              colorBottom="#F62424"
              size="20px"
              className="hidden md:block left-40 top-96"
            />
          </div>
        </SectionContainer>
      </div>

      <section id="services" className="bg-[#F2F5F7]s">
        <SectionContainer className="relative lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-stretch">
          <IconRectagule
            className="hidden lg:block absolute -z-10 top-10 left-10 rotate-12"
            color="#FF6E1A"
          />
          <IconRectagule
            className="hidden lg:block absolute -z-10 bottom-10 right-10 rotate-12"
            color="#EC1AFF"
          />
          <div className="text-center space-y-4 md:text-start">
            <SectionHeader
              subtitle={DATA.servicesSection.subtitle}
              title={DATA.servicesSection.title}
            />
            <p className="text-start text-sm md:text-base">{DATA.servicesSection.description}</p>
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-2 sm:justify-items-center sm:w-fit sm:mx-auto lg:mr-0">
            {DATA.servicesSection.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="border border-white/10 bg-background shadow-xl rounded-3xl text-center px-4 py-6 mx-auto md:px-0 flex flex-col gap-6 w-fit md:w-[220px] md:h-[220px] lg:mx-0 "
                >
                  <div
                    className="rounded-full mx-auto p-5 sm:p-7"
                    style={{ backgroundColor: service.colorIconContainer }}
                  >
                    <IconComponent className="text-foreground w-9 h-9" />
                  </div>
                  <h4 className="w-48 text-sm md:w-44 lg:text-base mx-auto">{service.title}</h4>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      <section id="development-methodology" className="bg-[#F2F5F7]">
        <SectionContainer className="space-y-8 relative">
          <SectionHeader
            className="text-center"
            title={DATA.developmentStages.title}
          />
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 md:gap-12 md:justify-items-center">
            {DATA.developmentStages.stages.map((step, index) => (
              <StepsContainer
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                className={`
                  ${index === 0 ? "" : ""}
                  ${index === 1 ? "sm:mt-28 " : ""}
                  ${index === 2 ? "sm:-mt-20 " : ""}
                  ${index === 3 ? "" : ""}
                `}
              />
            ))}
          </div>

        </SectionContainer>
      </section>

      <section id="projects" className="bg-[#F2F5F7]s">
        <SectionContainer className="relative">
          <div className="text-center space-y-4">
            <SectionHeader
              subtitle={DATA.portfolioSection.subtitle}
              title={DATA.portfolioSection.title}
            />
            <p className="text-sm  md:text-base">{DATA.portfolioSection.description}</p>
          </div>
          <div className="flex flex-wrap xl:!flex-row gap-5 md:gap-12 items-center justify-center mx-auto">
            {DATA.portfolioSection.projects.map((project, index) => (
              <MiniCardProject
                key={index}
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                width={((index + 1) / 2) == 0 ? 300 : 270}
                height={((index + 1) / 2) == 0 ? 300 : 270}
              />
            ))}
          </div>
          
          <IconRectagule
            className="hidden lg:block absolute top-0 right-10 -rotate-12"
            color="#EC1AFF"
          />
        </SectionContainer>
      </section>

      <section id="testimonials" className="bg-[#F2F5F7]">
        <SectionContainer className="relative">
          <SectionHeader
            className="text-center"
            subtitle={DATA.testimonialSection.subtitle}
            title={DATA.testimonialSection.title}
          />
          {/* <TestimonialCarousel /> */}
          <div className="flex flex-wrap gap-5 items-center justify-center">
            {/* Sin carrusel en pantallas medianas y mayores */}
            <div className="flex flex-wrap justify-center items-center lg:items-stretch lg:grid grid-cols-3 gap-10 ">
                {DATA.testimonialSection.testimonials.map((testimonial, index) => (
                    <CardTestimonial
                        key={index}
                        imageUrl={testimonial.imageUrl}
                        name={testimonial.name}
                        position={testimonial.position}
                        testimonial={testimonial.text}
                    />
                ))}
            </div>
          </div>
          
          <IconRectagule
            className="hidden lg:block absolute top-0 left-10 rotate-12"
            color="#2563FF"
          />
          <IconRectagule
            className="hidden lg:block absolute bottom-0 right-10 rotate-12"
            color="#2563FF"
          />
        </SectionContainer>
      </section>

      <section id="contact-us" className="bg-[#F2F5F7]s">
        <SectionContainer className="md:mb-16 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-10">
          <div className="relative pb-[90px] sm:pb-[144px] w-fit mx-auto lg:mx-0">
            <Image
              className="rounded-3xl w-[180px] h-[180px] sm:w-[325px] sm:h-[288px] ml-[90px]  sm:ml-[162.5px] object-cover shadow-xl"
              src={'/img/chat.jpeg'}
              width={300}
              height={300}
              alt="m"
            />
            <Image
              className="absolute bottom-0 rounded-3xl w-[180px] h-[180px] sm:w-[325px] sm:h-[288px] object-cover shadow-xl"
              src={'/img/ia.jpeg'}
              width={300}
              height={300}
              alt="m"
            />

            <IconRectagule
              className="hidden lg:block absolute -z-10 top-0 left-10"
              color="#E2E2E2"
            />
            <IconRectagule
              className="hidden lg:block absolute -z-10 bottom-0 right-10"
              color="#FF6E1A"
            />
          </div>
          <div className="text-center lg:text-start space-y-4 lg:max-w-[500px]">
            <SectionHeader
              title={DATA.contactSection.title}
            />
            <p className="text-sm md:text-base">{DATA.contactSection.description}</p>
            {/* <ButtonCallToAction text="Contact us" className="mx-auto mt-4 lg:mx-0" /> */}

            <ContactUsForm />
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </div>
  );
}
