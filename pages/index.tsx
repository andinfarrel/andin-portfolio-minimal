import Head from 'next/head';
import clsx from 'clsx';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react'
import { airtable, getMinifiedRecords } from '../services/airtable';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const titlesTable = airtable('Titles');
  const projectsTable = airtable('Projects');
  const skillsTable = airtable('Skills');
  const techsTable = airtable('Techs');
  const interestsTable = airtable('Interests');


  const titles = await titlesTable.select({
    fields: ["Title"]
  }).all();
  const projects = await projectsTable.select({}).all();
  const skills = await skillsTable.select({}).all();
  const techs = await techsTable.select({}).all();
  const interests = await interestsTable.select({}).all();


  return {
    props: {
      titles: getMinifiedRecords(titles),
      projects: getMinifiedRecords(projects),
      skills: getMinifiedRecords(skills),
      techs: getMinifiedRecords(techs),
      interests: getMinifiedRecords(interests)
    }
  }
}

export default function Home({titles, projects, skills, techs, interests}) {
  const [darkMode, setdarkMode] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[titleIndex].fields.Title);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((titleIndex+1) % titles.length);
      setCurrentTitle(titles[titleIndex].fields.Title);
    },1000)
    return () => {
      clearInterval(intervalId);
    }
  }, [titleIndex])

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const skillsHeading = '{ skills }';
  const techsHeading = '{ techs }';
  const interestsHeading = '{ interests }';
  const projectsHeading = '{ projects }';


  return (
    <div className={clsx({bgColor}, 'w-full min-h-screen p-4 md:p-8')}>
      <Head>
        <title>Andin's</title>
      </Head>
      <header className="w-full min-h-screen grid grid-flow-row auto-rows-fr md:grid-flow-col md:auto-cols-fr-fr justify-items-center">
        <div className="mx-8 md:mx-0 md:mt-52 md:flex-row space-y-5">
          <p className="text-7xl font-bold font-display fade-in-text">Andin Farrel</p>
          <p className="italic text-4xl font-body fade-in-text">{currentTitle}</p>
        </div>
        <div className="order-first mt-10 md:order-last md:mx-0 md:mt-32">
          <img 
            alt={'logo'}
            className="rounded-full"
            style={{ maxWidth: '300px' }}
            src="/avatar/avatar.svg"/>
        </div>
      </header>
      <section className="w-full">
        <p className="text-3xl font-display text-center w-full">{skillsHeading}</p>
        <div className="w-full h-80 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-5 place-items-center my-20  md:p-8">
          {
            skills && skills.map((s, index) => (
              <p key={index} className="text-center font-body">{s.fields.Name}</p>
            ))
          }
        </div>
      </section>
      <section className="w-full">
        <p className="text-3xl font-display text-center">{techsHeading}</p>
        <div className="w-full h-full grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-10 place-items-center my-20  md:p-8">
          {
            techs && techs.map((t, index) => (
              <div key={index} className="w-full h-full text-center flex flex-col space-y-2">
                <div className="flex-1 w-full">
                  <img 
                    className="mx-auto w-auto"
                    src={t.fields.Logo[0].url}
                    style={{maxHeight: "40px"}}
                    alt="logo"
                  />
                </div>
                <p className="flex-initial text-center font-body">{t.fields.Name}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section className="w-full min-h-screen">
        <p className="text-3xl font-display text-center">{interestsHeading}</p>
        <div className="w-full h-80 grid auto-rows-fr grid-cols-2 md:grid-cols-3 gap-5 place-items-center my-20  md:p-8">
          {
            interests && interests.map((i, index) => (
              <div key={index} className="text-center">
                <p className="font-body text-lg">{i.fields.Name}</p>
                <p className="font-body">{i.fields.Description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section className="w-full min-h-screen">
        <p className="text-3xl font-display text-center">{projectsHeading}</p>
        <div className="w-full h-full flex flex-col md:flex-row place-items-center space-y-20  my-20  md:p-8">
          {
            projects && projects.map((p, index) => (
              <div key={index} className="w-full h-full text-center flex flex-col space-y-4">
                <div className="flex-1 w-full">
                  <img 
                    className="mx-auto my-auto w-auto"
                    src={p.fields.Logo[0].url}
                    style={{height: "200px"}}
                    alt="logo"
                  />
                </div>
                <a href={p.fields.Url} className="flex-initial text-center font-body text-lg italic underline hover:text-green-500">{p.fields.Name}</a>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}
