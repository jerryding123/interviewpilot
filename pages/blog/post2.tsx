"use client"

import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { SEO } from '#components/seo'
import { Section } from '#components/section'

export default function BlogPost2() {
  return (
    <>
      <SEO 
        title="Sample Blog Post 2 - Interview Pilot Blog"
        description="Tips and best practices for using Interview Pilot effectively"
      />
      <Section>
        <Container maxW="container.xl" py={16}>
          <Heading as="h1" size="2xl" mb={6}>
            Sample Blog Post 2
          </Heading>
          <Box mb={8}>
            <Text fontStyle="italic" color="muted">
              May 8, 2025
            </Text>
          </Box>
          <Box mb={12}>
            <Text fontSize="xl" mb={6}>
              This is another sample blog post. It discusses tips and best practices for using Interview Pilot effectively.
            </Text>
          </Box>
        </Container>
      </Section>
    </>
  )
} 