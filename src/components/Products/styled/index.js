import styled from "styled-components";

const Style = styled.div`
  .main {
    margin-top: ${({ theme }) => theme.Dimensions.margin_main_top};

    .container {
      display: flex;
      width: 76.875rem;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;

      .w-full {
        display: flex;
        width: 38.4375rem;
        padding: 0rem 0.9375rem 5.20313rem 1.1875rem;
        align-items: flex-start;
        flex-shrink: 0;
        #media-gallery {
          #swiper-container {
            #responsive-image {
            }
          }
          .sf-media-nav {
            .swiper-wrapper {
              .swiper-side {
                .sf-prod-media {
                  #responsive-image {
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  ${
    "" /* 
   
  } */
  }
`;

export default Style;
