"use clinet";

import { useEffect, useState } from "react";
import type { InfiniteQueryObserverResult } from "@tanstack/react-query";

interface UseIntersectionObserverProps {
  threshold: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage,
}: UseIntersectionObserverProps) => {
  // 관찰할 요소, 마지막에 div태그를 넣어서 관찰할 것임
  const [target, setTarget] = useState<HTMLDivElement | undefined | null>(null);

  const observerCallback: IntersectionObserverCallback = (entries: any) => {
    console.log(entries);
    entries.foreach((entry: any) => {
      //target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
};
