import '@testing-library/jest-dom'
import 'whatwg-fetch'

// Polyfill TextEncoder/TextDecoder pour react-router
import { TextEncoder, TextDecoder } from 'node:util'
global.TextEncoder = TextEncoder
