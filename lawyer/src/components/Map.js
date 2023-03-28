/** @format */

import React from "react";
import { Box } from "@chakra-ui/react";

/*const initialCenter = {
  lat: 49.842123117868134,
  lng: 24.0317286269832,
};*/


export const Adress2 = () => {
  return (
    <Box >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2573.0258982062787!2d24.031793!3d49.8419709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6daf2af431%3A0xd1b86b864117cb0c!2z0JvRjNCy0L7QstGB0LrQsNGPINGA0LDRgtGD0YjQsCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1679999288920!5m2!1sru!2sua'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
    </Box>
  );
};
