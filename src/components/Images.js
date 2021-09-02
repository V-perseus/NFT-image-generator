import React from 'react';

const images = props => {

  return (
    <div className="row text-center">
        {props.nfts.map((nft, key) => {
            return(
                <div key={key} className="col-md-3 mb-3">
                    <a href={"https://ipfs.io/ipfs/" + nft.fileHash} target="_blank" rel="noreferrer">
                        <img 
                            src={"https://ipfs.io/ipfs/" + nft.fileHash}
                            alt={nft.fileName}
                            width="100%" 
                            height="80%" 
                            border="0" 
                            align="center" 
                        />
                    </a>
                    <div>{nft.fileName}</div>
                </div>
            )
        })}
    </div>
  );

}

export default images;