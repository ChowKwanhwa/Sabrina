import React, { useEffect } from 'react';

const JupiterTerminal = () => {
  useEffect(() => {
    if (window.Jupiter) {
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'integrated-terminal',
        endpoint: 'https://api.mainnet-beta.solana.com',
        formProps: {
          fixedOutputMint: true,
          initialAmount: '1000000000',
          initialInputMint: "So11111111111111111111111111111111111111112",
          initialOutputMint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
          initialSlippageBps: 1000,
        },
      });
    }
  }, []);

  return <div id="integrated-terminal" />;
};

export default JupiterTerminal;
