"use client"

import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function BlogPost2() {
  return (
    <Container maxW="container.md" py={16} mt={10}>
      <Heading as="h1" size="xl" mb={6} pt={8}>
        Sample Blog Post 2
      </Heading>
      <Box>
        <Text>
          This is another sample blog post. It discusses tips and best practices for using Interview Pilot effectively.
        </Text>
      </Box>
    </Container>
  )
} 