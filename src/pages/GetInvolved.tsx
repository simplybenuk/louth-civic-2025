
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';

const GetInvolved = () => {
  return (
    <Layout>
      <Hero 
        title="Get Involved"
        subtitle="Join us in preserving and enhancing the unique character of Louth"
      />
      
      <Section title="BECOME A MEMBER" className="bg-white">
        <div className="space-y-6">
          <p>
            By becoming a member of Louth Civic Trust, you are supporting our work to preserve and 
            enhance the unique character of Louth. Members receive regular newsletters, invitations to 
            events, and the opportunity to have a say in the future of Louth.
          </p>
          <p>
            Membership benefits include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quarterly newsletters keeping you informed about our activities</li>
            <li>Invitations to talks, visits and social events</li>
            <li>Opportunity to contribute to the protection of Louth's heritage</li>
            <li>A voice in decisions affecting the future of Louth</li>
          </ul>
          <p className="font-bold">
            Annual membership fees:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Individual: £15</li>
            <li>Couple/Household: £20</li>
            <li>Corporate: £50</li>
          </ul>
          <div className="mt-8 space-y-4">
            <p>
              To join, please contact our Membership Secretary or download the membership form below.
            </p>
            <button className="btn btn-primary">
              Download Membership Form
            </button>
          </div>
        </div>
      </Section>
      
      <Section title="VOLUNTEER" className="bg-lct-gray">
        <div className="space-y-6">
          <p>
            Volunteers are essential to the work of Louth Civic Trust. There are many ways you can 
            help, from serving on the committee to helping with events or researching local history.
          </p>
          <p>
            Ways you can volunteer:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Join the committee</li>
            <li>Help organize events</li>
            <li>Assist with research projects</li>
            <li>Contribute to our newsletter</li>
            <li>Represent the Trust at local events</li>
          </ul>
          <p>
            Whatever your skills and interests, there is likely to be a role for you in Louth Civic Trust.
          </p>
          <div className="mt-8">
            <button className="btn btn-primary">
              Contact Us About Volunteering
            </button>
          </div>
        </div>
      </Section>
      
      <Section title="MAKE A DONATION" className="bg-white">
        <div className="space-y-6">
          <p>
            Your donations help us to continue our work preserving and enhancing the unique character 
            of Louth. As a registered charity, all donations are gratefully received and will be used 
            to support our activities.
          </p>
          <p>
            You can make a one-off donation or set up a regular payment to support our work.
          </p>
          <div className="mt-8 space-y-4">
            <p>
              For information on how to donate, please contact our Treasurer.
            </p>
            <button className="btn btn-primary">
              Contact Treasurer
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default GetInvolved;
