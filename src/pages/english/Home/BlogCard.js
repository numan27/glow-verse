import React from 'react';
import { Card, CardBody, Button } from '@material-tailwind/react';

const BlogCard = ({ image, title, excerpt }) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <CardBody>
        <div className='flex flex-col justify-between'>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{excerpt}</p>
        </div>
        <Button
          color="pink"
          ripple="dark"
          buttonType="link"
          href="#"
          className="mt-4"
        >
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
