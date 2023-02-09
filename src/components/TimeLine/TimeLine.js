import React, { useEffect, useRef, useState } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>Wie zijn wij?</SectionTitle>
        <SectionText>Ayizo Webdesign staat voor het beste webdesign-team van Nederland. Wij bouwen professionele websites.<br/><br/>

Ayizo Webdesign heeft door heel Nederland klanten geholpen met het leveren van hoogwaardige websites.

Alle klanten hebben al succes geboekt of zijn bezig met het boeken van succes met als ultieme einddoel, de baas te zijn op de markt.</SectionText>
<br/>
      <SectionTitle>Over ons</SectionTitle>
      <SectionText>
        Hallo, wij zijn Ayizo Webdesign - Ayizo Webdesign is voor ondernemers die begrijpen dat er nog iets ontbreekt. Ondernemers die weten waar ze naar toe willen werken , die een visie hebben, maar nog het ontbrekende puzzelstukje nodig hebben om succes te boeken.
      </SectionText>
      <SectionText>
          Hoe intelligenter je bent, hoe meer het je opvalt dat er nog wat belangrijks ontbreekt. Niet elke ondernemer gelooft erin dat ze het ontbrekende deel gaan vinden 
      </SectionText>

      <SectionText>
        Ayizo Webdesign is voor ondernemers die hun onderneming naar de hoogste level willen brengen.
      </SectionText>
<br/>
  <SectionTitle>Voor wie is Ayizo Webdesign?</SectionTitle>    
<SectionText>Ayizo Webdesign is voor ondernemers die begrijpen dat er nog iets ontbreekt. 
Ondernemers die weten waar ze naar toe willen werken, die een visie hebben, maar nog het ontbrekende puzzelstukje nodig hebben om succes te boeken.
</SectionText>
<SectionText>Hoe intelligenter je bent, hoe meer het je opvalt dat er nog wat belangrijks ontbreekt.
Niet elke ondernemer gelooft erin dat ze het ontbrekende deel gaan vinden.
</SectionText>
<SectionText>Ayizo Webdesign is voor ondernemers die WEL geloven in het vinden van het ontbrekende deel wat leidt naar succes. En
Ayizo Webdesign is voor ondernemers die hun onderneming naar de hoogste level willen brengen.</SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
       
      </CarouselContainer>
  
 
    </Section>
  );
};

export default Timeline;
