import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  queryKeys: string[];
  queryFn: () => any;
  children: React.ReactElement[] | React.ReactElement;
}
const DataWrapper = ({ queryKeys, queryFn, children }: Props) => {
  const data = useQuery({
    queryKey: queryKeys,
    queryFn: queryFn,
  });

  if (data.isLoading) {
    return <div className="text-center p-10"> Loading...</div>;
  }

  if (data.error) {
    return <div className="text-center p-10">Error</div>;
  }

  if (!data.data) {
    return <div className="text-center p-10">No data available</div>;
  }

  const childrenPopulated = React.Children.map(
    children,
    (child: React.ReactElement) => {
      return React.cloneElement(child, { data: data.data });
    }
  );

  return <>{childrenPopulated}</>;
};

export default DataWrapper;
