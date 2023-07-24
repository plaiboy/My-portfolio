import React from "react";

import { Button, Img, Input, List, Text } from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="h-[4843px] md:h-[7335px] sm:h-[7634px] md:px-5 relative w-full">
        <header className="flex flex-col items-center justify-center mx-auto md:px-10 sm:px-5 px-[390px] w-full">
          <div className="flex flex-col md:flex-row gap-2.5 items-start px-4 justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-center max-w-[859px] pl-[236.86px] pr-[236.85px] md:px-10 sm:px-5 py-2.5 w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pl-5 pr-[19.72px] py-[13px] w-auto">
                    <Text
                      className="text-base text-blue-700 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      Home
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pl-5 pr-[19.91px] py-[13px] w-auto">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      About
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pl-5 pr-[19.92px] py-[13px] w-auto">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      Portfolio
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pl-5 pr-[19.02px] py-[13px] w-auto">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      Contact
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pl-5 pl-[22.86px] py-[9px] w-[129px]">
                <Button className="bg-blue-700 cursor-pointer min-w-[106px] py-3 rounded-[3px] text-base text-center text-white-A700">
                  Hire Me
                </Button>
              </div>
                </div>
              </div>
             
            </div>
          </header>

          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1920px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1920px] w-full">
              <div className="bg-gray-50 flex flex-col items-center justify-center px-4 max-w-[1920px] md:px-10 sm:px-5 px-[390px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] h-[856px] md:h-auto items-start justify-start max-w-[1140px] pt-[100px] w-full">
                  <div className="flex flex-1 flex-col gap-5 items-start justify-center px-2.5 py-[258.06px] w-full">
                    <div className="flex flex-col items-start justify-start pb-[0.5px] pr-[19px] w-[520px] sm:w-full">
                      <Text
                        className="md:text-5xl text-[65px] text-gray-900 w-auto"
                        size="txtPoppinsMedium65"
                      >
                        <>I&#39;m Seth Mbaka</>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[9px] w-[520px] sm:w-full">
                      <div className="flex flex-col items-start justify-start pb-[0.38px] w-[520px] sm:w-full">
                        <Text
                          className="leading-[25.00px] text-base text-gray-800"
                          size="txtPoppinsRegular16Gray800"
                        >
                          <>
                            I am a professional developer with one year of
                            experience in web
                            <br />
                            development, proficient in HTML, CSS, JavaScript,
                            and TypeScript,
                            <br />
                            and have working knowledge of JavaScript frameworks
                            such as
                            <br />
                            React.js, Node.js, and MongoDB for backend
                            development.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[383.95px] w-[520px] sm:w-full">
                      <Button className="bg-blue-700 cursor-pointer min-w-[136px] py-3 rounded-[3px] text-base text-center text-white-A700">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[800px] md:h-auto items-start justify-center p-2.5 w-full">
                    <Img
                      className="md:h-auto h-full object-cover w-full"
                      src="images/img_h1herobg1tyddvhvlwebp.png"
                      alt="h1herobg1tyddvh"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1920px] pb-10 pt-[90px] md:px-10 sm:px-5 px-[390px] w-full">
                <div className="flex flex-col gap-5 items-center justify-center max-w-[1140px] px-2.5 py-[9px] w-full">
                  <div className="flex flex-col items-start justify-center max-w-[1120px] pb-[0.59px] pl-[455.67px] pr-[455.33px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-auto whitespace-nowrap"
                      size="txtPoppinsRegular44"
                    >
                      About Me
                    </Text>
                  </div>
                  <Img
                    className="h-[22px] w-[1120px]"
                    src="images/img_divelementorelement.svg"
                    alt="divelementorele"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-2.5 h-[530px] md:h-auto items-start justify-start max-w-[1140px] pb-[100px] w-full">
                <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-end p-[9px] w-[65%] md:w-full">
                  <div className="flex flex-col items-start justify-start max-w-[718px] md:pr-10 sm:pr-5 pr-[400px] w-full">
                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21.3px] w-[318px]">
                      <Text
                        className="leading-[28.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtPoppinsMedium26"
                      >
                        <>
                          Experienced Fullstack
                          <br />
                          Developer Proficient in
                          <br />
                          HTML, CSS, JavaScript,
                          <br />
                          TypeScript, ReactJS,
                          <br />
                          NodeJS, and MongoDB
                        </>
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[22px] w-[718px]"
                    src="images/img_divelementorelement.svg"
                    alt="divelementorele_One"
                  />
                  <div className="flex flex-col items-start justify-start max-w-[718px] md:pr-10 sm:pr-5 pr-[60px] w-full">
                    <div className="flex flex-col items-start justify-start max-w-[658px] pb-[0.56px] pr-[17.3px] w-full">
                      <Text
                        className="leading-[25.00px] text-base text-gray-800"
                        size="txtPoppinsRegular16Gray800"
                      >
                        <>
                          I am a professional fullstack developer with one year
                          of experience in web
                          <br />
                          development. My skillset includes expertise in HTML,
                          CSS, JavaScript, and
                          <br />
                          TypeScript. I am proficient in utilizing JavaScript
                          frameworks such as ReactJS,
                          <br />
                          NodeJS, and MongoDB for backend development. I have a
                          strong familiarity with
                          <br />
                          the aforementioned technologies and their
                          implementation in creating robust
                          <br />
                          and dynamic web applications.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start max-w-[718px] md:pr-10 sm:pr-5 pr-[577.32px] pt-5 w-full">
                    <Button className="bg-blue-700 cursor-pointer min-w-[140px] py-3 rounded-[3px] text-base text-center text-white-A700">
                      Contact Me
                    </Button>
                  </div>
                </div>
                <div className="bg-deep_orange-600_2b flex sm:flex-1 flex-col items-start justify-center pb-[16.83px] pt-2.5 px-2.5 rounded-[10px] w-[391px] sm:w-full">
                  <Img
                    className="h-[371px] md:h-auto object-cover w-[371px] sm:w-full"
                    src="images/img_glenncarstens.png"
                    alt="glenncarstens"
                  />
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-start justify-start max-w-[1920px] md:px-10 px-4 sm:px-5 px-[390px] py-2.5 w-full">
                <div className="flex flex-col gap-5 items-center justify-start py-[9px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-center max-w-[1120px] pb-[0.59px] pl-[258.36px] pr-[259.64px] md:px-10 sm:px-5 w-full">
                      <Text
                        className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-auto whitespace-nowrap"
                        size="txtPoppinsRegular44"
                      >
                        <>What Services I&#39;m Providing</>
                      </Text>
                    </div>
                    <Img
                      className="h-[22px] w-[1120px]"
                      src="images/img_divelementorelement.svg"
                      alt="divelementorele_Two"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start max-w-[1153px] pt-[50px] w-full">
                    <List
                      className="sm:flex-col flex-row gap-[33px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1153px] pb-[27px] px-[16.5px] w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start pb-[5px] w-full">
                        <div className="flex flex-col items-start justify-start w-[351px]">
                          <Img
                            className="h-[351px] md:h-auto object-cover w-full"
                            src="images/img_christinhumem.png"
                            alt="christinhumem"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-3 md:pr-10 sm:pr-5 pr-[78.33px] w-[351px]">
                          <div className="flex flex-col items-start justify-start pb-[3.59px] pt-[3px] w-auto">
                            <Text
                              className="leading-[28.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                              size="txtPoppinsMedium26"
                            >
                              <>
                                Professional Website
                                <br />
                                Design Services
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-1.5 pb-[0.38px] sm:pr-5 pr-[26.33px] w-[351px]">
                          <Text
                            className="leading-[25.00px] text-base text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              I am a fullstack developer with 1 year
                              <br />
                              experience in web development, offering
                              <br />
                              website design services using HTML, CSS,
                              <br />
                              JavaScript, and TypeScript.
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[11px] md:pr-10 sm:pr-5 pr-[262.33px] w-[351px]">
                          <Text
                            className="text-base text-blue-700 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start pb-[5px] w-full">
                        <div className="flex flex-col items-start justify-start w-[351px]">
                          <Img
                            className="h-[351px] md:h-auto object-cover w-full"
                            src="images/img_charlesdeluvio.png"
                            alt="charlesdeluvio"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-3 pr-[9.33px] w-[351px]">
                          <div className="flex flex-col items-start justify-start pb-[3.59px] pt-[3px] w-auto">
                            <Text
                              className="leading-[28.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                              size="txtPoppinsMedium26"
                            >
                              <>
                                Expert Fullstack Developer
                                <br />
                                for Cloud Computing
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[7px] pr-[7.33px] w-[351px]">
                          <Text
                            className="leading-[25.00px] text-base text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              I offer cloud computing services,
                              <br />
                              specializing in Saas, providing efficient and
                              <br />
                              secure solutions for businesses.
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-2.5 md:pr-10 sm:pr-5 pr-[262.33px] w-[351px]">
                          <Text
                            className="text-base text-blue-700 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start pb-[5px] w-full">
                        <div className="flex flex-col items-start justify-start w-[351px]">
                          <Img
                            className="h-[351px] md:h-auto object-cover w-full"
                            src="images/img_leoneventervi.png"
                            alt="leoneventervi"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-3 md:pr-10 sm:pr-5 pr-[58.34px] w-[351px]">
                          <div className="flex flex-col items-start justify-start pb-[3.59px] pt-[3px] w-auto">
                            <Text
                              className="leading-[28.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                              size="txtPoppinsMedium26"
                            >
                              <>
                                Professional Website
                                <br />
                                Development Services
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-1.5 pb-[0.97px] pr-[12.34px] w-[351px]">
                          <Text
                            className="leading-[25.00px] text-base text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              I am a fullstack developer with expertise in
                              <br />
                              web development, offering website
                              <br />
                              application development services using
                              <br />
                              HTML, CSS, JavaScript, and TypeScript,
                              <br />
                              along with frameworks like…
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[11px] md:pr-10 sm:pr-5 pr-[262.34px] w-[351px]">
                          <Text
                            className="text-base text-blue-700 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            Read more
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-center justify-center px-4 max-w-[1920px] pt-[70px] md:px-10 sm:px-5 px-[390px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-[1140px] pb-[10.01px] pt-2.5 px-2.5 w-full">
                  <div className="flex flex-col items-start justify-center max-w-[1120px] pb-[10.59px] pl-[379.36px] pr-[380.64px] pt-[9px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-auto whitespace-nowrap"
                      size="txtPoppinsRegular44"
                    >
                      Work Experience
                    </Text>
                  </div>
                  <Img
                    className="h-[72px] w-[1120px]"
                    src="images/img_divelementorelement.svg"
                    alt="divelementorele_Three"
                  />
                  <div className="gap-[55px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[1120px] p-2.5 w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[18px] items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-7 w-[270px]">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                          size="txtPoppinsMedium26"
                        >
                          Web development
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[270px]">
                        <div className="flex flex-col items-start justify-start pb-[0.53px] pr-[7px] w-[270px]">
                          <Text
                            className="leading-[25.00px] text-base text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              Web development is a highly
                              <br />
                              sought-after skill in today’s
                              <br />
                              technology-driven world. As a<br />
                              fullstack developer, I have a<br />
                              strong foundation in HTML, CSS,
                              <br />
                              and JavaScript, and I am
                              <br />
                              proficient in using frameworks
                              <br />
                              like React.js, Node.js, and
                              <br />
                              MongoDB for building robust and
                              <br />
                              dynamic websites and
                              <br />
                              applications.
                            </>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-2.5 mb-[54px] w-[270px]"
                        src="images/img_divelementorelement_gray_200_01.svg"
                        alt="divelementorele_Four"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[19px] items-center justify-start p-[29px] sm:px-5 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-[270px]">
                        <div className="flex flex-col items-start justify-start pb-[0.19px] md:pr-10 sm:pr-5 pr-[81px] w-[270px]">
                          <Text
                            className="leading-[28.00px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                            size="txtPoppinsMedium26"
                          >
                            <>
                              Search engine
                              <br />
                              optimization
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[270px]">
                        <div className="flex flex-col items-start justify-start pb-[0.13px] w-[270px]">
                          <Text
                            className="leading-[25.00px] text-base text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              Search Engine Optimization (SEO)
                              <br />
                              is the practice of optimizing a<br />
                              website to improve its visibility
                              <br />
                              and ranking on search engine
                              <br />
                              results pages. With expertise in
                              <br />
                              HTML, CSS, and JavaScript, along
                              <br />
                              with an understanding of search
                              <br />
                              engine algorithms, an SEO
                              <br />
                              specialist can implement various
                              <br />
                              strategies to increase organic
                              <br />
                              traffic and enhance online
                              <br />
                              presence.
                            </>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-2.5 w-[270px]"
                        src="images/img_divelementorelement_gray_200_01.svg"
                        alt="divelementorele_Five"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[18px] items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[106px] w-[270px]">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                          size="txtPoppinsMedium26"
                        >
                          Ui/ux design
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[270px]">
                        <div className="flex flex-col items-start justify-start pb-[0.34px] pr-[3px] w-[270px]">
                          <Text
                            className="leading-[25.00px] text-base text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              UI/UX design is the art of creating
                              <br />
                              visually appealing and user-
                              <br />
                              friendly interfaces for websites
                              <br />
                              and applications. It involves
                              <br />
                              understanding user behavior,
                              <br />
                              conducting research, and
                              <br />
                              implementing design principles
                              <br />
                              to enhance the overall user
                              <br />
                              experience.
                            </>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-2.5 mb-[105px] w-[270px]"
                        src="images/img_divelementorelement_gray_200_01.svg"
                        alt="divelementorele_Six"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50_01 flex flex-col items-center justify-center max-w-[1920px] py-[100px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start p-2.5 w-full">
                  <div className="flex flex-col items-start justify-center max-w-[1900px] pb-[10.59px] pl-[823.53px] pr-[823.47px] pt-[9px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-auto whitespace-nowrap"
                      size="txtPoppinsRegular44"
                    >
                      My Portfolio
                    </Text>
                  </div>
                  <Img
                    className="h-[62px] w-[1900px]"
                    src="images/img_divelementorelement.svg"
                    alt="divelementorele_Seven"
                  />
                </div>
              </div>
              <div className="bg-gray-50_68 flex flex-col items-center justify-center px-4 max-w-[1920px] pb-[149.99px] pt-[70px] md:px-10 sm:px-5 px-[390px] w-full">
                <div className="flex flex-col gap-[20.01px] items-start justify-start max-w-[1140px] pb-[9.99px] pt-2.5 px-2.5 w-full">
                  <div className="flex flex-col items-start justify-center max-w-[1120px] pb-[10.59px] pl-[336.42px] pr-[337.58px] pt-[9px] md:px-10 sm:px-5 w-full">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-auto whitespace-nowrap"
                      size="txtPoppinsRegular44"
                    >
                      What My Clients Say
                    </Text>
                  </div>
                  <Img
                    className="h-[62px] w-[1120px]"
                    src="images/img_divelementorelement.svg"
                    alt="divelementorele_Eight"
                  />
                  <List
                    className="sm:flex-col flex-row gap-[55px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1120px] p-2.5 w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-[35px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <Img
                        className="h-[19px] w-[260px]"
                        src="images/img_divelementorelement_green_400.svg"
                        alt="divelementorele"
                      />
                      <div className="flex flex-col items-start justify-center pl-[102.7px] pr-[102.71px] md:px-10 sm:px-5 w-[260px]">
                        <Img
                          className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                          src="images/img_male31ggklltiewebp.png"
                          alt="male31ggklltiew"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[260px]">
                        <div className="flex flex-col items-start justify-center pb-[0.97px] pl-[8.05px] pr-[7.95px] w-[260px]">
                          <Text
                            className="leading-[25.00px] text-base text-center text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              The website application
                              <br />
                              development service provided
                              <br />
                              was exceptional in terms of
                              <br />
                              functionality and user
                              <br />
                              experience.
                            </>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[52px] w-[260px]"
                        src="images/img_divelementorelement.svg"
                        alt="divelementorele_One"
                      />
                      <div className="flex flex-col items-start justify-center pb-[0.59px] pl-[92.52px] pr-[92.48px] md:px-10 sm:px-5 w-[260px]">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtPoppinsRegular16Gray800"
                        >
                          Narongpang Sammerpark
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-[35px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <Img
                        className="h-[19px] w-[260px]"
                        src="images/img_divelementorelement_green_400.svg"
                        alt="divelementorele"
                      />
                      <div className="flex flex-col items-start justify-center pl-[102.7px] pr-[102.71px] md:px-10 sm:px-5 w-[260px]">
                        <Img
                          className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                          src="images/img_female3150x15.png"
                          alt="female3150xFifteen"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[260px]">
                        <div className="flex flex-col items-start justify-center pb-[0.38px] pl-[5.58px] pr-[5.42px] w-[260px]">
                          <Text
                            className="leading-[25.00px] text-base text-center text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              The website design service
                              <br />
                              exceeded expectations with its
                              <br />
                              visually appealing and intuitive
                              <br />
                              layout.
                            </>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[52px] w-[260px]"
                        src="images/img_divelementorelement.svg"
                        alt="divelementorele_One"
                      />
                      <div className="flex flex-col items-start justify-center mb-[25px] pb-[0.59px] pl-[80.08px] pr-[79.92px] md:px-10 sm:px-5 w-[260px]">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtPoppinsRegular16Gray800"
                        >
                          Kana Patrick
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-[35px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <Img
                        className="h-[19px] w-[260px]"
                        src="images/img_divelementorelement_green_400.svg"
                        alt="divelementorele"
                      />
                      <div className="flex flex-col items-start justify-center pl-[102.7px] pr-[102.71px] md:px-10 sm:px-5 w-[260px]">
                        <Img
                          className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                          src="images/img_male1ggklltiewebp.png"
                          alt="male1ggklltiewe"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[260px]">
                        <div className="flex flex-col items-start justify-center pb-[0.38px] pl-[0.19px] pr-[1.81px] w-[260px]">
                          <Text
                            className="leading-[25.00px] text-base text-center text-gray-800"
                            size="txtPoppinsRegular16Gray800"
                          >
                            <>
                              The cloud computing service,
                              <br />
                              specifically Saas, proved to be a<br />
                              cost-effective and efficient
                              <br />
                              solution for our business needs.
                            </>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[52px] w-[260px]"
                        src="images/img_divelementorelement.svg"
                        alt="divelementorele_One"
                      />
                      <div className="flex flex-col items-start justify-center mb-[25px] pb-[0.59px] pl-[65.16px] pr-[66.84px] md:px-10 sm:px-5 w-[260px]">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtPoppinsRegular16Gray800"
                        >
                          Sammerpark
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1920px] w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1920px] pt-[100px] w-full">
            <div className="flex flex-col gap-5 items-center justify-start pt-[3px] md:px-5 px-[3px] w-[34%] md:w-full">
              <div className="flex flex-col gap-[19px] items-center justify-start mt-[5px] w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-center pb-[0.59px] pl-[161.58px] pr-[161.42px] md:px-10 sm:px-5 w-[617px] md:w-full">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-auto whitespace-nowrap"
                    size="txtPoppinsRegular44"
                  >
                    Stay In Touch
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[617px] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[-0.84px] items-start justify-center pb-[0.59px] pl-[36.09px] pr-[35.75px] sm:px-5 w-[617px] md:w-full">
                    <Text
                      className="text-base text-center text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      Enter your email address to register 
                    </Text>
                    <Text
                      className="text-[17px] text-center text-gray-800 w-auto"
                      size="txtPoppinsRegular17"
                    >
                      to our newsletter subscription!
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-8 w-[617px]"
                  src="images/img_divelementorelement.svg"
                  alt="divelementorele_Nine"
                />
              </div>
              <div className="flex flex-col items-start justify-start max-w-[630px] w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start max-w-[630px] pb-3.5 w-full">
                  <div className="flex flex-col items-center justify-start max-w-[630px] px-[6.5px] w-full">
                    <Input
                      name="input"
                      placeholder="Enter email address"
                      className="leading-[normal] p-0 placeholder:text-gray-900_ad sm:pr-5 text-base text-gray-900_ad text-left w-full"
                      wrapClassName="bg-gray-50_02 border border-black-900_2b border-solid pl-[15px] pr-[35px] py-[7px] rounded-md w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-end justify-center max-w-[630px] md:px-10 sm:px-5 px-[251.42px] w-full">
                    <Button className="bg-blue-700 cursor-pointer min-w-[127px] py-2 rounded-[3px] text-base text-center text-white-A700">
                      Contact me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col font-playfairdisplay items-center justify-center px-4 max-w-[1920px] pb-5 pt-[30px] md:px-10 sm:px-5 px-[390px] w-full">
              <div className="md:h-[174px] h-[175px] sm:h-[241px] pt-2.5 relative w-full">
                <div className="absolute gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between left-[0] max-w-[1120px] pb-[50px] pr-[0.02px] top-[6%] w-full">
                  <div className="flex flex-1 flex-row items-center justify-start pb-[8.59px] md:pr-10 sm:pr-5 pr-[264.58px] pt-[8.58px] w-full">
                    <List
                      className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[79%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-center p-2.5 w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center p-2.5 w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_twitter.svg"
                          alt="twitter"
                        />
                      </div>
                    </List>
                    <div className="flex flex-col items-start justify-center pl-[10.25px] pr-[11.75px] py-2.5 w-10">
                      <Img
                        className="h-5 w-[18px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center pl-[104.42px] pr-[104.44px] md:px-10 sm:px-5 py-2.5 w-full">
                    <Img
                      className="h-[37px] md:h-auto object-cover w-[188px] sm:w-full"
                      src="images/img_logoipsum218l.png"
                      alt="logoipsum218l"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center pb-[13.59px] md:pl-10 sm:pl-5 pl-[191.1px] pr-[10.6px] pt-[11.58px] w-full">
                    <Text
                      className="text-right text-white-A700 text-xl w-auto"
                      size="txtPlayfairDisplayRegular20"
                    >
                      my projects
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col font-poppins items-start justify-center max-w-[1120px] pl-[456.3px] pr-[545.7px] md:px-10 sm:px-5 right-[0] w-full">
                  <Text
                    className="leading-[24.00px] text-[15px] text-center text-white-A700 underline"
                    size="txtPoppinsRegular15"
                  >
                    <>
                      +254790159514
                      <br />
                      Nairobi, Kenya
                      <br />
                      sethmbaka5@gmail.com
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
