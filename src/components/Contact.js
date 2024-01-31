const Contact = () => {
  return (
    <div className="w-1/2 mx-auto my-10 p-8">
      <h1 className="font-bold text-3xl mb-5">Contact Us</h1>
      <div className="p-3 text-justify leading-8">
        <p>
          We value your feedback, inquiries, and suggestions. Whether you have a
          question about an order, want to share your thoughts, or simply need
          assistance, the SavorSpot team is here for you. Choose from the
          options below to get in touch with us:
        </p>
        <h1 className="font-bold text-xl my-4">Customer Support</h1>
        <p>
          Are you a restaurant owner interested in partnering with SavorSpot?
          We'd love to explore collaboration opportunities and expand our
          culinary offerings. Contact our business development team:
          <pre>Email: partnerships@savorspot.com</pre>
          <pre>Phone: 91-800-9876-5432</pre>
        </p>

        <h1 className="font-bold text-xl my-4">Feedback and Suggestions</h1>
        <p>
          Your opinions matter to us. If you have suggestions for improving our
          services or want to share your experiences, please drop us a line at:
          <pre>Email: feedback@savorspot.com</pre>
        </p>
        <h1 className="font-bold text-xl my-4">Social Media</h1>
        <p>
          Connect with us on social media to stay updated on the latest
          promotions, culinary trends, and community discussions:
          <pre>Facebook: SavorSpotOfficial</pre>
          <pre>Twitter: @SavorSpot</pre>
          <pre>Instagram: @savorspot</pre>
        </p>
      </div>
    </div>
  );
};

export default Contact;
