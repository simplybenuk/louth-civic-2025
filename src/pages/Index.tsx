
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero 
        title="Louth Civic Trust"
        subtitle="An independent local charity encouraging community pride and passion for the preservation of Louth's unique character and heritage"
      />
      
      <Section title="OUR TOWN" id="our-town" className="bg-white">
        <div className="space-y-4">
          <p>
            Louth is a classic brick-built market town with fine Georgian and Victorian buildings, 
            much of it on a planned medieval street pattern with an open market space.
          </p>
          <p>
            The older central parts of the town are designated as a Conservation Area.
          </p>
          <p>
            Under the commanding spire of St James's Church, the town centre has retained its character 
            with small shops and businesses providing individual service.
          </p>
          <p>
            All this together with a wide range of facilities and attractions make Louth a desirable 
            place to live, work and visit.
          </p>
        </div>
      </Section>
      
      <Section title="CAMPAIGNING" id="campaigning" className="bg-lct-gray">
        <p>
          As an independent organisation we can represent public concern through liaison with local 
          authorities, government, private enterprise and local initiatives
        </p>
      </Section>
      
      <Section title="EDUCATION" id="education" className="bg-white">
        <div className="space-y-4">
          <p>
            We provide information for people living and working in Louth and the surrounding area 
            on local architecture and building heritage, the town's Conservation Area, listed buildings 
            and local issues.
          </p>
          <p>
            We are a member of <a href="https://www.civicvoice.org.uk/" target="_blank" rel="noopener noreferrer">Civic Voice</a> who campaign nationally and lobby parliament.
          </p>
        </div>
      </Section>
      
      <Section title="ACTION" id="action" className="bg-lct-gray">
        <p>
          Where necessary as an organisation we co-ordinate plans for conservation, restoration and 
          regeneration of buildings or open spaces or take direct action to prevent plans that would 
          have irreversible effects on our townscape.
        </p>
      </Section>
      
      <section className="py-12 bg-lct-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            For more information visit our <Link to="/about" className="text-white font-bold">About Us</Link> and <Link to="/get-involved" className="text-white font-bold">Get Involved</Link> pages on the website.
          </p>
          <Link to="/get-involved" className="btn bg-white text-lct-blue hover:bg-opacity-90 no-underline">
            Become a Member
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
