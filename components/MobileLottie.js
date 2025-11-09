import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const MobileLottie = () => {
  return (
    <div className="block md:hidden">
      <DotLottieReact
        src="https://lottie.host/8c9d73eb-dc11-4a9a-9030-931933f1693b/8amwYUIQkh.lottie"
        loop
        autoplay
        useFrameInterpolation={false}
        renderConfig={{
          devicePixelRatio: 1
        }}
      />
    </div>
  );
};

export default MobileLottie;