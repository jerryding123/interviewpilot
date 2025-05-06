"use client"

import { Box, Container, Heading, Text, VStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

interface BlogPost {
  id: string
  title: string
  preview: string
}

const blogPosts: BlogPost[] = [
  {
    id: 'post1',
    title: 'Sample Blog Post 1',
    preview: 'This is a sample blog post. It provides an overview of the latest features and updates in Interview Pilot.',
  },
  {
    id: 'post2',
    title: 'Sample Blog Post 2',
    preview: 'This is another sample blog post. It discusses tips and best practices for using Interview Pilot effectively.',
  },
]

export default function BlogPage() {
  return (
    <Container maxW="container.md" py={16} mt={10}>
      <Heading as="h1" size="xl" mb={6} pt={8}>
        Blog
      </Heading>
      <VStack spacing={6} align="stretch">
        <Text>
          Welcome to our blog. Here you will find the latest updates, tips, and insights related to Interview Pilot.
        </Text>
        
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="lg" mb={2}>
                <Link as={NextLink} href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </Heading>
              <Text>
                {post.preview}
              </Text>
            </Box>
          ))
        ) : (
          <Text>No blog posts available.</Text>
        )}
      </VStack>
    </Container>
  )
} 