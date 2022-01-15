-- CreateTable
CREATE TABLE `quotes` (
    `quote_id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` CHAR(36) NOT NULL,
    `status` BOOLEAN NULL,
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `quote_data` JSON NULL,
    `created_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`quote_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
