"use client"

import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function BlogPost1() {
  return (
    <Container maxW="container.md" py={16} mt={10}>
      <Heading as="h1" size="xl" mb={6} pt={8}>
        Sample Blog Post 1
      </Heading>
      <Box>
        <Text>
          This is a sample blog post. It provides an overview of the latest features and updates in Interview Pilot.
        </Text>
      </Box>
    </Container>
  )
} 