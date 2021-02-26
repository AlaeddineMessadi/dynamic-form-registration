import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useWidth = (element: HTMLElement = window) => {
  const [width, setWidth] = useState(0); // default width, detect on server.

	const handleResize = useCallback(() => {
		setWidth(element.innerWidth);
	}, [element]);

  useEffect(() => {
		if (width <= 0) handleResize();
		window.addEventListener('resize', debounce(handleResize, 50));
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize, width, element]);
	return width;
};

export default useWidth;