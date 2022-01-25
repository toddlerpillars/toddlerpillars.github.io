import { Box, Typography, Grid, Button } from '@mui/material';
import downloadIcon from '../assets/images/icon_download.png';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toast';
const WAITING_STATUS = 'waiting';
const STARTED_STATUS = 'started';
const FAILED_STATUS = 'failed';
const FINISHED_STATUS = 'finished';
const QUEUE_STATUS = 'in-queue';
const sx = {
    nftContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        paddingTop: '100%',
        position: 'relative',
        // borderRadius: "20px",
        overflow: 'hidden',
        transition: 'all .3s',
        perspective: '1px',

        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            borderColor: 'transparent',
            '& button': {
                display: 'flex',
            },
        },
    },
    nftImg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    downloadOriginBtn: {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        width: '40px',
        height: '40px',
        backgroundImage: `url(${downloadIcon})`,
        backgroundSize: 'contain',
        borderRadius: '5px',
        margin: 'auto',
        display: 'none',
        border: 'none',
        opacity: '0.75',
        backgroundColor: 'transparent',
        '&:hover': {
            outline: 'none',
            cursor: 'pointer',
            opacity: '1',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    downloadOriginBtnSpan: {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        borderRadius: '5px',
        margin: 'auto',
        backgroundColor: '#00000099',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '60%',
    },
    waitingForDownload: {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#000c',
        zIndex: '2',
        display: 'flex',
    },
};

const Card = ({ setFullscreenSource, metadata }) => {
    const [downloadingOriginalArtStatus, setDownloadingOriginalArtStatus] =
        useState(null);
    const [originalArtUrl, setOriginalArtUrl] = useState(null);
    const [showOriginalArtText, setShowOriginalArtText] = useState(false);

    // const callOriginalArtApi = () => {
    //     axios
    //         .get(
    //             'https://toddlerpillars-layerserver.herokuapp.com/images/' +
    //                 metadata.dna
    //         )
    //         .then(function (response) {
    //             if (response.data.success) {
    //                 if (response.data.status === FINISHED_STATUS) {
    //                     setOriginalArtUrl(response.data.url);
    //                 }
    //                 setDownloadingOriginalArtStatus(response.data.status);
    //             }
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             toast.error('An error has occurred');
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // };
    const downloadOringinalArt = (e) => {
        e.stopPropagation();
        window.open(metadata.original_art);
    };

    // useEffect(() => {
    //     let interval;
    //     if (
    //         downloadingOriginalArtStatus === STARTED_STATUS ||
    //         downloadingOriginalArtStatus === WAITING_STATUS ||
    //         downloadingOriginalArtStatus === QUEUE_STATUS
    //     ) {
    //         interval = setInterval(() => {
    //             callOriginalArtApi();
    //         }, 5000);
    //         return () => clearInterval(interval);
    //     } else {
    //         return () => clearInterval(interval);
    //     }
    // }, [downloadingOriginalArtStatus]);

    // useEffect(() => {
    //     if (originalArtUrl) {
    //         window.open(originalArtUrl);
    //         setOriginalArtUrl(null);
    //     }
    // }, [originalArtUrl]);

    return (
        <Grid item xs={12} sm={6} md={4} sx={sx.cardItem}>
            <Box sx={sx.nftContainer} onClick={setFullscreenSource}>
                <Box component="img" sx={sx.nftImg} src={metadata.image} />
                {/* {showOriginalArtText && (
                    <Box component="span" sx={sx.downloadOriginBtnSpan}>
                        Download original art
                    </Box>
                )} */}
                <Box
                    component="button"
                    sx={sx.downloadOriginBtn}
                    onClick={downloadOringinalArt}
                    onMouseOver={() => setShowOriginalArtText(true)}
                    onMouseOut={() => setShowOriginalArtText(false)}
                >
                    {' '}
                </Box>

                {/* {downloadingOriginalArtStatus === WAITING_STATUS ||
                downloadingOriginalArtStatus === STARTED_STATUS ||
                downloadingOriginalArtStatus === QUEUE_STATUS ? (
                    <Box sx={sx.waitingForDownload}>
                        <Typography
                            sx={{
                                color: '#fff',
                                margin: 'auto',
                                padding: '0 20px',
                                textAlign: 'center',
                            }}
                        >
                            Your request is being processed... This can take up
                            to 20-30 seconds. Please wait!
                        </Typography>
                    </Box>
                ) : (
                    ''
                )} */}
            </Box>
            <Typography
                variant="text"
                sx={{ mt: 4, textAlign: 'center', fontWeight: 700 }}
            >
                Toddlerpillar {metadata.tokenId}
            </Typography>
        </Grid>
    );
};

export default Card;
