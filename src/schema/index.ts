import { z } from "zod";


const testSchema = z.object({
    test: z.string().min(4)
})

export {testSchema}