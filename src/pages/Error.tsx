// react
import { PropsWithChildren, memo } from 'react';

// react-router-dom
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

// react-flip-tilt
import { Tilt, TiltProps } from 'react-next-tilt';

export interface x extends TiltProps {
  t: string;
}

const Error = () => {
  const error = useRouteError();

  const ErrorWrapper = memo(({ children }: PropsWithChildren) => (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[16px] border-[8px] bg-[linear-gradient(to_bottom_right,rgb(203,213,225),rgb(175,190,205))] px-4 py-8">
      {children}
    </div>
  ));
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-slate-300 bg-[url('/t-bg.webp')] bg-contain bg-fixed bg-left bg-no-repeat font-inter text-slate-500">
      <Tilt className="w-[300px] max-w-[90%]" borderRadius="16px">
        <ErrorWrapper>
          {isRouteErrorResponse(error) ? (
            <>
              <p className="text-6xl text-red-500">{error.status}</p>
              <h1 className="text-4xl">{error.statusText}</h1>
              <p className="text-center text-xl">
                <i style={{ wordBreak: 'break-word' }}>{error.data}</i>
              </p>
            </>
          ) : (
            <h1 className="text-4xl">Uknown Error</h1>
          )}
        </ErrorWrapper>
      </Tilt>
    </main>
  );
};

export default Error;
