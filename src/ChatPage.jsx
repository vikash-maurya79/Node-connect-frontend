import React, { useEffect, useRef, useState } from 'react';
import { socket } from '../utils/socket';

const ChatPage = () => {
    let roomId = 1234;

    const remoteVideoRef = useRef(null);
    const localVideoRef = useRef(null);

    useEffect(() => {

        const init = async () => {

            socket.on('connect', () => {
                console.log('a socket connected');
            });

            socket.emit('join-room', roomId);

            let stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });

            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }

            const peer = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.l.google.com:19302"
                    }
                ]
            });

            stream.getTracks().forEach(track => {
                peer.addTrack(track, stream);
            });

            peer.ontrack = async (event) => {

                if (remoteVideoRef.current) {

                    remoteVideoRef.current.srcObject =
                        event.streams[0];

                    try {
                        await remoteVideoRef.current.play();
                    } catch (err) {
                        console.error(err);
                    }
                }
            };

            peer.onicecandidate = (event) => {
                if (event.candidate) {
                    socket.emit(
                        "ice-candidate",
                        event.candidate
                    );
                }
            };

            socket.on("ice-candidate", async (candidate) => {
                try {
                    await peer.addIceCandidate(candidate);
                } catch (error) {
                    console.error(error);
                }
            });

            socket.on('offer', async (offer) => {
                try {
                    await peer.setRemoteDescription(offer);

                    const answer = await peer.createAnswer();

                    await peer.setLocalDescription(answer);

                    socket.emit('answer', answer);

                } catch (error) {
                    console.error(error);
                }
            });

            socket.on('answer', async (answer) => {
                try {
                    await peer.setRemoteDescription(answer);
                } catch (error) {
                    console.error(error);
                }
            });

            const offer = await peer.createOffer();

            await peer.setLocalDescription(offer);

            socket.emit('offer', offer);
        };

        init();

        return () => {
            socket.off('connect');
            socket.off('offer');
            socket.off('answer');
            socket.off('ice-candidate');
        };

    }, []);

    let [message, setMessage] = useState('');

    function sendMessageHandler() {
        socket.emit('send-message', message);
    }

    return (
        <div>
            Chat page is working

            <input
                type='text'
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
            />

            <button onClick={sendMessageHandler}>
                Send
            </button>

            <h3>Remote Video</h3>
            <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                style={{
                    width: "400px",
                    border: "1px solid black"
                }}
            />

            <h3>Local Video</h3>
            <video
                ref={localVideoRef}
                autoPlay
                muted
                playsInline
                style={{
                    width: "100px",
                    border: "1px solid black"
                }}
            />
        </div>
    );
};

export default ChatPage;