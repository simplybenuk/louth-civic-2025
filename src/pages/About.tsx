
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <Hero 
        title="About Us"
        subtitle="Learn about the Louth Civic Trust and our mission to preserve the unique character of Louth"
      />
      
      <Section title="WHO WE ARE" className="bg-white">
        <div className="space-y-6">
          <p>
            Louth Civic Trust is an independent local charity encouraging community pride and passion 
            for the preservation of Louth's unique character and heritage. We work to ensure that 
            development in Louth respects and enhances the town's historic environment.
          </p>
          <p>
            Founded in 1967, we have been active in preserving the character of Louth for over 50 years.
            We are run entirely by volunteers and funded through memberships and donations.
          </p>
          <p>
            The Trust is a registered charity and a company limited by guarantee.
          </p>
        </div>
      </Section>
      
      <Section title="OUR MISSION" className="bg-lct-gray">
        <div className="space-y-6">
          <p>
            Our mission is to promote high standards of planning and architecture in Louth, to educate 
            the public in the geography, history, natural history and architecture of Louth, and to 
            secure the preservation, protection, development and improvement of features of historic or 
            public interest.
          </p>
          <p>
            We strive to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stimulate public interest in the town</li>
            <li>Promote high standards of planning and architecture</li>
            <li>Secure the preservation, protection, development and improvement of features of historic or public interest</li>
            <li>Maintain the unique character of Louth and its surroundings</li>
          </ul>
        </div>
      </Section>
      
      <Section title="OUR COMMITTEE" className="bg-white">
        <div className="space-y-6">
          <p>
            Louth Civic Trust is managed by a committee of volunteers who are dedicated to preserving 
            and enhancing the character of Louth. Our committee members come from a variety of backgrounds, 
            bringing different skills and perspectives to the Trust.
          </p>
          <p>
            The committee meets regularly to discuss planning applications, events, and other matters 
            related to the Trust's objectives.
          </p>
          <div className="mt-6">
            <Link to="/get-involved" className="btn btn-primary">
              Join Our Committee
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
