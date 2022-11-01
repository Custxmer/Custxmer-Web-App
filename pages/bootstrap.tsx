import { AppProps } from 'next/app';
import React from 'react';
import {Container, Stack, Button } from 'react-bootstrap';

export default function Bootstrap({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <Stack className={'mt-5'} direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        </Container>
    )
}
