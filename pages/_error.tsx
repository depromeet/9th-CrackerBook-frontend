function Error(statusCode: number): JSX.Element {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} orrcured on server`
        : "An error occured on client"}
    </p>
  );
}

Error.getInitailProps = ({ res, err }) => {
  return res ? res.statusCode : err ? err.statusCode : 404;
};

export default Error;
