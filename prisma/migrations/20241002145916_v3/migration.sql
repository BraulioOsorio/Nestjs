-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "cars" (
    "car_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "status_car" BOOLEAN NOT NULL DEFAULT true,
    "publication" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "sales" (
    "sales_id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "sale" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("sales_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;
