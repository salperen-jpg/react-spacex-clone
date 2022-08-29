import React from 'react';
import styled from 'styled-components';
const StarShipText = () => {
  return (
    <Wrapper>
      <div className='section-center text-center'>
        <div>
          <p>
            On Wednesday, May 5, Starship serial number 15 (SN15) successfully
            completed SpaceX’s fifth high-altitude flight test of a Starship
            prototype from Starbase in Texas.
          </p>
          <p>
            Similar to previous high-altitude flight tests of Starship, SN15 was
            powered through ascent by three Raptor engines, each shutting down
            in sequence prior to the vehicle reaching apogee – approximately 10
            km in altitude. SN15 performed a propellant transition to the
            internal header tanks, which hold landing propellant, before
            reorienting itself for reentry and a controlled aerodynamic descent.
          </p>
          <p>
            The Starship prototype descended under active aerodynamic control,
            accomplished by independent movement of two forward and two aft
            flaps on the vehicle. All four flaps were actuated by an onboard
            flight computer to control Starship’s attitude during flight and
            enabled precise landing at the intended location. SN15’s Raptor
            engines reignited as the vehicle performed the landing flip maneuver
            immediately before touching down for a nominal landing on the pad.
          </p>
        </div>
        <div>
          <p>
            These test flights of Starship are all about improving our
            understanding and development of a fully reusable transportation
            system designed to carry both crew and cargo on long-duration
            interplanetary flights, and help humanity return to the Moon, and
            travel to Mars and beyond.{' '}
          </p>
          <p>
            Congratulations to the entire SpaceX team on SN15’s successful
            flight and landing!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  .text-center {
    display: grid;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.6;
    }
  }
  @media (min-width: 600px) {
    padding: 8rem 0;
    .text-center {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }
`;
export default StarShipText;
