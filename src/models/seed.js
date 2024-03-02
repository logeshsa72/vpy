import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import pages from "./pages.json" assert { type: "json" };
import pageGroups from "./pagesGroup.json" assert { type: "json" };


const prisma = new PrismaClient();


async function main() {
  //use this to remove id, if you use an autogenerated ID
  let pageData = pages.map(({ id, ...rest }) => rest);
  let pageGroupData = pageGroups.map(({ id, ...rest }) => rest);
  const existingData = await prisma.page.findMany({})
  if(existingData.length > 0) pageData = [];
  const hashedPassword = await bcrypt.hash("1234", 10);
  await prisma.$transaction([
    prisma.user.upsert({
      where: {
        username: "abdulvahid",
      },
      update: {},
      create: {
        username: "abdulvahid",
        password: hashedPassword,
        email: "abdulathreya@gmail.com",
      },
    }),
    // insert data to current db
    prisma.pageGroup.createMany({ data: pageGroupData }),
    prisma.page.createMany({ data: pageData }),
  ]);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

 
 