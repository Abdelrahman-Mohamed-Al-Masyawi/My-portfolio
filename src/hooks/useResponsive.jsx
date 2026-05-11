import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  // Extra Small Mobile
  const isSmallMobile = useMediaQuery({
    query: '(max-width: 479px)',
  });

  // Mobile
  const isMobile = useMediaQuery({
    query: '(min-width: 480px) and (max-width: 767px)',
  });

  // Small Tablet
  const isSmallTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 991px)',
  });

  // Large Tablet
  const isLargeTablet = useMediaQuery({
    query: '(min-width: 992px) and (max-width: 1199px)',
  });

  // Laptop
  const isLaptop = useMediaQuery({
    query: '(min-width: 1200px) and (max-width: 1439px)',
  });

  // Desktop
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px) and (max-width: 1919px)',
  });

  // Large Desktop / 4K
  const isLargeDesktop = useMediaQuery({
    query: '(min-width: 1920px)',
  });
  const isTabletWithPhone = useMediaQuery({ query: '(max-width:900px)' });
  return {
    isSmallMobile,
    isMobile,
    isSmallTablet,
    isLargeTablet,
    isLaptop,
    isDesktop,
    isLargeDesktop,
    isTabletWithPhone,
  };
}
