-- DropForeignKey
ALTER TABLE `Page` DROP FOREIGN KEY `Page_pageGroupId_fkey`;

-- DropForeignKey
ALTER TABLE `Subscription` DROP FOREIGN KEY `Subscription_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Branch` DROP FOREIGN KEY `Branch_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `UserOnBranch` DROP FOREIGN KEY `UserOnBranch_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `UserOnBranch` DROP FOREIGN KEY `UserOnBranch_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `RoleOnPage` DROP FOREIGN KEY `RoleOnPage_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `RoleOnPage` DROP FOREIGN KEY `RoleOnPage_pageId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_localCityId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_permCityId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_employeeCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `FinYear` DROP FOREIGN KEY `FinYear_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `EmployeeCategory` DROP FOREIGN KEY `EmployeeCategory_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `Country` DROP FOREIGN KEY `Country_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `State` DROP FOREIGN KEY `State_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `City` DROP FOREIGN KEY `City_stateId_fkey`;

-- DropForeignKey
ALTER TABLE `Department` DROP FOREIGN KEY `Department_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `PartyCategory` DROP FOREIGN KEY `PartyCategory_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Currency` DROP FOREIGN KEY `Currency_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Party` DROP FOREIGN KEY `Party_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `Party` DROP FOREIGN KEY `Party_currencyId_fkey`;

-- DropForeignKey
ALTER TABLE `Party` DROP FOREIGN KEY `Party_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Party` DROP FOREIGN KEY `Party_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `Party` DROP FOREIGN KEY `Party_updatedById_fkey`;

-- DropForeignKey
ALTER TABLE `PartyOnAccessoryItems` DROP FOREIGN KEY `PartyOnAccessoryItems_partyId_fkey`;

-- DropForeignKey
ALTER TABLE `PartyOnAccessoryItems` DROP FOREIGN KEY `PartyOnAccessoryItems_accessoryItemId_fkey`;

-- DropForeignKey
ALTER TABLE `Content` DROP FOREIGN KEY `Content_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Counts` DROP FOREIGN KEY `Counts_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `YarnType` DROP FOREIGN KEY `YarnType_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Hsn` DROP FOREIGN KEY `Hsn_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `YarnBlend` DROP FOREIGN KEY `YarnBlend_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Yarn` DROP FOREIGN KEY `Yarn_contentId_fkey`;

-- DropForeignKey
ALTER TABLE `Yarn` DROP FOREIGN KEY `Yarn_yarnTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `Yarn` DROP FOREIGN KEY `Yarn_countsId_fkey`;

-- DropForeignKey
ALTER TABLE `Yarn` DROP FOREIGN KEY `Yarn_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `YarnOnYarnBlend` DROP FOREIGN KEY `YarnOnYarnBlend_yarnId_fkey`;

-- DropForeignKey
ALTER TABLE `YarnOnYarnBlend` DROP FOREIGN KEY `YarnOnYarnBlend_yarnBlendId_fkey`;

-- DropForeignKey
ALTER TABLE `FabricType` DROP FOREIGN KEY `FabricType_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Fabric` DROP FOREIGN KEY `Fabric_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Fabric` DROP FOREIGN KEY `Fabric_fabricTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `FabricOnYarnBlend` DROP FOREIGN KEY `FabricOnYarnBlend_yarnBlendId_fkey`;

-- DropForeignKey
ALTER TABLE `FabricOnYarnBlend` DROP FOREIGN KEY `FabricOnYarnBlend_fabricId_fkey`;

-- DropForeignKey
ALTER TABLE `AccessoryGroup` DROP FOREIGN KEY `AccessoryGroup_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `AccessoryItem` DROP FOREIGN KEY `AccessoryItem_accessoryGroupId_fkey`;

-- DropForeignKey
ALTER TABLE `AccessoryItem` DROP FOREIGN KEY `AccessoryItem_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Accessory` DROP FOREIGN KEY `Accessory_accessoryItemId_fkey`;

-- DropForeignKey
ALTER TABLE `Accessory` DROP FOREIGN KEY `Accessory_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Color` DROP FOREIGN KEY `Color_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `UnitOfMeasurement` DROP FOREIGN KEY `UnitOfMeasurement_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_taxTemplateId_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_payTermId_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_deliveryPartyId_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_deliveryBranchId_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_updatedById_fkey`;

-- DropForeignKey
ALTER TABLE `Po` DROP FOREIGN KEY `Po_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `PInwardOrReturn` DROP FOREIGN KEY `PInwardOrReturn_supplierId_fkey`;

-- DropForeignKey
ALTER TABLE `PInwardOrReturn` DROP FOREIGN KEY `PInwardOrReturn_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `PInwardOrReturn` DROP FOREIGN KEY `PInwardOrReturn_updatedById_fkey`;

-- DropForeignKey
ALTER TABLE `PInwardOrReturn` DROP FOREIGN KEY `PInwardOrReturn_branchId_fkey`;

-- DropForeignKey
ALTER TABLE `PayTerm` DROP FOREIGN KEY `PayTerm_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `TaxTerm` DROP FOREIGN KEY `TaxTerm_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `TaxTemplate` DROP FOREIGN KEY `TaxTemplate_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `TaxTemplateDetails` DROP FOREIGN KEY `TaxTemplateDetails_taxTemplateId_fkey`;

-- DropForeignKey
ALTER TABLE `TaxTemplateDetails` DROP FOREIGN KEY `TaxTemplateDetails_taxTermId_fkey`;

-- DropForeignKey
ALTER TABLE `Gauge` DROP FOREIGN KEY `Gauge_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Design` DROP FOREIGN KEY `Design_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `LoopLength` DROP FOREIGN KEY `LoopLength_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Gsm` DROP FOREIGN KEY `Gsm_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Dia` DROP FOREIGN KEY `Dia_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Size` DROP FOREIGN KEY `Size_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Stock` DROP FOREIGN KEY `Stock_companyId_fkey`;

-- DropTable
DROP TABLE `Page`;

-- DropTable
DROP TABLE `Company`;

-- DropTable
DROP TABLE `Subscription`;

-- DropTable
DROP TABLE `Branch`;

-- DropTable
DROP TABLE `UserOnBranch`;

-- DropTable
DROP TABLE `Role`;

-- DropTable
DROP TABLE `RoleOnPage`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `Employee`;

-- DropTable
DROP TABLE `FinYear`;

-- DropTable
DROP TABLE `EmployeeCategory`;

-- DropTable
DROP TABLE `Country`;

-- DropTable
DROP TABLE `State`;

-- DropTable
DROP TABLE `City`;

-- DropTable
DROP TABLE `Department`;

-- DropTable
DROP TABLE `PageGroup`;

-- DropTable
DROP TABLE `PartyCategory`;

-- DropTable
DROP TABLE `Currency`;

-- DropTable
DROP TABLE `Party`;

-- DropTable
DROP TABLE `PartyOnAccessoryItems`;

-- DropTable
DROP TABLE `Content`;

-- DropTable
DROP TABLE `Counts`;

-- DropTable
DROP TABLE `YarnType`;

-- DropTable
DROP TABLE `Hsn`;

-- DropTable
DROP TABLE `YarnBlend`;

-- DropTable
DROP TABLE `Yarn`;

-- DropTable
DROP TABLE `YarnOnYarnBlend`;

-- DropTable
DROP TABLE `FabricType`;

-- DropTable
DROP TABLE `Fabric`;

-- DropTable
DROP TABLE `FabricOnYarnBlend`;

-- DropTable
DROP TABLE `AccessoryGroup`;

-- DropTable
DROP TABLE `AccessoryItem`;

-- DropTable
DROP TABLE `Accessory`;

-- DropTable
DROP TABLE `Color`;

-- DropTable
DROP TABLE `UnitOfMeasurement`;

-- DropTable
DROP TABLE `Po`;

-- DropTable
DROP TABLE `PInwardOrReturn`;

-- DropTable
DROP TABLE `PayTerm`;

-- DropTable
DROP TABLE `TaxTerm`;

-- DropTable
DROP TABLE `TaxTemplate`;

-- DropTable
DROP TABLE `TaxTemplateDetails`;

-- DropTable
DROP TABLE `Gauge`;

-- DropTable
DROP TABLE `Design`;

-- DropTable
DROP TABLE `LoopLength`;

-- DropTable
DROP TABLE `Gsm`;

-- DropTable
DROP TABLE `Dia`;

-- DropTable
DROP TABLE `Size`;

-- DropTable
DROP TABLE `Stock`;

-- CreateTable
CREATE TABLE `accessory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aliasName` VARCHAR(191) NOT NULL,
    `accessoryCategory` ENUM('STITCHING', 'PACKING') NOT NULL,
    `accessoryItemId` INTEGER NOT NULL,
    `hsn` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Accessory_accessoryItemId_fkey`(`accessoryItemId` ASC),
    INDEX `Accessory_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accessorygroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `AccessoryGroup_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accessoryitem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `accessoryGroupId` INTEGER NOT NULL,
    `companyId` INTEGER NULL,

    INDEX `AccessoryItem_accessoryGroupId_fkey`(`accessoryGroupId` ASC),
    INDEX `AccessoryItem_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `branch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branchName` VARCHAR(191) NOT NULL,
    `branchCode` VARCHAR(191) NULL,
    `contactName` VARCHAR(191) NULL,
    `contactMobile` BIGINT NOT NULL,
    `contactEmail` VARCHAR(191) NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `idPrefix` VARCHAR(191) NULL,
    `idSequence` VARCHAR(191) NULL,
    `tempPrefix` VARCHAR(191) NULL,
    `tempSequence` VARCHAR(191) NULL,
    `prefixCategory` ENUM('Default', 'Specific') NULL,

    INDEX `Branch_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `city` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `stateId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `City_stateId_fkey`(`stateId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `color` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `pantone` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Color_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `gstNo` VARCHAR(191) NULL,
    `contactName` VARCHAR(191) NULL,
    `contactMobile` BIGINT NOT NULL,
    `contactEmail` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Company_companyId_key`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Content_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `companyId` INTEGER NOT NULL,

    INDEX `Country_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `counts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Counts_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `currency` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Currency_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `companyId` INTEGER NOT NULL,

    INDEX `Department_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `design` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Design_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `measurement` ENUM('CMS', 'INCHES', 'OPENWIDTH', 'TUBULER') NOT NULL,
    `kDia` BOOLEAN NOT NULL DEFAULT false,
    `fDia` BOOLEAN NOT NULL DEFAULT false,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Dia_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `regNo` VARCHAR(191) NOT NULL,
    `chamberNo` VARCHAR(191) NOT NULL,
    `departmentId` INTEGER NULL,
    `joiningDate` DATETIME(3) NOT NULL,
    `fatherName` VARCHAR(191) NULL,
    `dob` DATETIME(3) NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NULL,
    `maritalStatus` ENUM('SINGLE', 'MARRIED', 'SEPARATED') NULL,
    `bloodGroup` ENUM('AP', 'BP', 'AN', 'BN', 'ABP', 'ABN', 'OP', 'ON') NULL,
    `panNo` VARCHAR(191) NULL,
    `consultFee` VARCHAR(191) NULL,
    `salaryPerMonth` VARCHAR(191) NOT NULL,
    `commissionCharges` VARCHAR(191) NULL,
    `mobile` BIGINT NULL,
    `accountNo` VARCHAR(191) NULL,
    `ifscNo` VARCHAR(191) NULL,
    `branchName` VARCHAR(191) NULL,
    `degree` VARCHAR(191) NULL,
    `specialization` VARCHAR(191) NULL,
    `localAddress` VARCHAR(191) NULL,
    `localCityId` INTEGER NOT NULL,
    `localPincode` INTEGER NULL,
    `permAddress` VARCHAR(191) NULL,
    `permCityId` INTEGER NULL,
    `permPincode` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `image` LONGBLOB NULL,
    `branchId` INTEGER NULL,
    `employeeCategoryId` INTEGER NULL,
    `permanent` BOOLEAN NOT NULL DEFAULT false,
    `leavingReason` VARCHAR(191) NULL,
    `leavingDate` DATETIME(3) NULL,
    `canRejoin` BOOLEAN NOT NULL DEFAULT true,
    `rejoinReason` VARCHAR(191) NULL,

    INDEX `Employee_branchId_fkey`(`branchId` ASC),
    INDEX `Employee_departmentId_fkey`(`departmentId` ASC),
    UNIQUE INDEX `Employee_email_key`(`email` ASC),
    INDEX `Employee_employeeCategoryId_fkey`(`employeeCategoryId` ASC),
    INDEX `Employee_localCityId_fkey`(`localCityId` ASC),
    INDEX `Employee_permCityId_fkey`(`permCityId` ASC),
    UNIQUE INDEX `Employee_regNo_key`(`regNo` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employeecategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `branchId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `defaultCategory` BOOLEAN NOT NULL DEFAULT false,

    INDEX `EmployeeCategory_branchId_fkey`(`branchId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabric` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aliasName` VARCHAR(191) NOT NULL,
    `hsn` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `fabricTypeId` INTEGER NOT NULL,
    `organic` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Fabric_companyId_fkey`(`companyId` ASC),
    INDEX `Fabric_fabricTypeId_fkey`(`fabricTypeId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabriconyarnblend` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `yarnBlendId` INTEGER NOT NULL,
    `percentage` INTEGER NOT NULL,
    `fabricId` INTEGER NOT NULL,

    INDEX `FabricOnYarnBlend_fabricId_fkey`(`fabricId` ASC),
    INDEX `FabricOnYarnBlend_yarnBlendId_fkey`(`yarnBlendId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabrictype` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `FabricType_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `finyear` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `from` DATETIME(3) NOT NULL,
    `to` DATETIME(3) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `FinYear_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gauge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Gauge_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gsm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Gsm_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hsn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Hsn_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `looplength` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `LoopLength_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `type` ENUM('Masters', 'Transactions', 'Reports', 'AdminAccess') NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `pageGroupId` INTEGER NULL,

    INDEX `Page_pageGroupId_fkey`(`pageGroupId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagegroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('Masters', 'Transactions', 'Reports', 'AdminAccess') NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `party` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `aliasName` VARCHAR(191) NULL,
    `displayName` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `cityId` INTEGER NULL,
    `pincode` INTEGER NULL,
    `panNo` VARCHAR(191) NULL,
    `tinNo` VARCHAR(191) NULL,
    `cstNo` VARCHAR(191) NULL,
    `cstDate` DATE NULL,
    `cinNo` VARCHAR(191) NULL,
    `faxNo` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `contactPersonName` VARCHAR(191) NULL,
    `gstNo` VARCHAR(191) NULL,
    `currencyId` INTEGER NULL,
    `costCode` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `companyId` INTEGER NOT NULL,
    `yarn` BOOLEAN NOT NULL DEFAULT false,
    `fabric` BOOLEAN NOT NULL DEFAULT false,
    `accessoryGroup` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdById` INTEGER NOT NULL,
    `updatedById` INTEGER NULL,

    INDEX `Party_cityId_fkey`(`cityId` ASC),
    INDEX `Party_companyId_fkey`(`companyId` ASC),
    INDEX `Party_createdById_fkey`(`createdById` ASC),
    INDEX `Party_currencyId_fkey`(`currencyId` ASC),
    INDEX `Party_updatedById_fkey`(`updatedById` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partycategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `PartyCategory_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partyonaccessoryitems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `partyId` INTEGER NOT NULL,
    `accessoryItemId` INTEGER NOT NULL,

    INDEX `PartyOnAccessoryItems_accessoryItemId_fkey`(`accessoryItemId` ASC),
    INDEX `PartyOnAccessoryItems_partyId_fkey`(`partyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payterm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `days` INTEGER NOT NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `PayTerm_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pinwardorreturn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `poType` ENUM('GreyYarn', 'DyedYarn', 'GreyFabric', 'DyedFabric', 'Accessory') NOT NULL,
    `supplierId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdById` INTEGER NOT NULL,
    `updatedById` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `poInwardReturnItems` JSON NULL,
    `inwardOrReturn` ENUM('PurchaseCancel', 'PurchaseInward', 'PurchaseReturn', 'ProcessDelivery', 'ProcessInward', 'DirectInward', 'DirectReturn') NOT NULL,
    `branchId` INTEGER NOT NULL,
    `dcDate` DATE NULL,
    `dcNo` VARCHAR(191) NULL,

    INDEX `PInwardOrReturn_branchId_fkey`(`branchId` ASC),
    INDEX `PInwardOrReturn_createdById_fkey`(`createdById` ASC),
    INDEX `PInwardOrReturn_supplierId_fkey`(`supplierId` ASC),
    INDEX `PInwardOrReturn_updatedById_fkey`(`updatedById` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `po` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transType` ENUM('GreyYarn', 'DyedYarn', 'GreyFabric', 'DyedFabric', 'Accessory') NOT NULL,
    `dueDate` DATE NOT NULL,
    `taxTemplateId` INTEGER NOT NULL,
    `supplierId` INTEGER NOT NULL,
    `payTermId` INTEGER NOT NULL,
    `deliveryPartyId` INTEGER NULL,
    `deliveryBranchId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `createdById` INTEGER NOT NULL,
    `updatedById` INTEGER NULL,
    `branchId` INTEGER NOT NULL,
    `poItems` JSON NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Po_branchId_fkey`(`branchId` ASC),
    INDEX `Po_createdById_fkey`(`createdById` ASC),
    INDEX `Po_deliveryBranchId_fkey`(`deliveryBranchId` ASC),
    INDEX `Po_deliveryPartyId_fkey`(`deliveryPartyId` ASC),
    INDEX `Po_payTermId_fkey`(`payTermId` ASC),
    INDEX `Po_supplierId_fkey`(`supplierId` ASC),
    INDEX `Po_taxTemplateId_fkey`(`taxTemplateId` ASC),
    INDEX `Po_updatedById_fkey`(`updatedById` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `defaultRole` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Role_companyId_name_key`(`companyId` ASC, `name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleonpage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleId` INTEGER NOT NULL,
    `pageId` INTEGER NOT NULL,
    `read` BOOLEAN NOT NULL DEFAULT false,
    `create` BOOLEAN NOT NULL DEFAULT false,
    `edit` BOOLEAN NOT NULL DEFAULT false,
    `delete` BOOLEAN NOT NULL DEFAULT false,

    INDEX `RoleOnPage_pageId_fkey`(`pageId` ASC),
    UNIQUE INDEX `RoleOnPage_roleId_pageId_key`(`roleId` ASC, `pageId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `isAccessory` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Size_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `state` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `gstNo` VARCHAR(191) NOT NULL,
    `countryId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `State_countryId_fkey`(`countryId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemType` ENUM('GreyYarn', 'DyedYarn', 'GreyFabric', 'DyedFabric', 'Accessory') NOT NULL,
    `itemDetails` JSON NOT NULL,
    `qty` DOUBLE NOT NULL,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `companyId` INTEGER NULL,
    `inOrOut` ENUM('PurchaseCancel', 'PurchaseInward', 'PurchaseReturn', 'ProcessDelivery', 'ProcessInward', 'DirectInward', 'DirectReturn') NOT NULL,

    INDEX `Stock_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyId` INTEGER NOT NULL,
    `validFrom` DATETIME(3) NOT NULL,
    `expireAt` DATETIME(3) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `maxUsers` INTEGER NOT NULL,

    INDEX `Subscription_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taxtemplate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `TaxTemplate_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taxtemplatedetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taxTemplateId` INTEGER NOT NULL,
    `taxTermId` INTEGER NOT NULL,
    `displayName` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NULL,
    `amount` VARCHAR(191) NULL,

    INDEX `TaxTemplateDetails_taxTemplateId_fkey`(`taxTemplateId` ASC),
    INDEX `TaxTemplateDetails_taxTermId_fkey`(`taxTermId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taxterm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isPoWise` BOOLEAN NOT NULL DEFAULT false,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `TaxTerm_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unitofmeasurement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `UnitOfMeasurement_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NULL,
    `otp` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `employeeId` INTEGER NULL,

    INDEX `User_employeeId_fkey`(`employeeId` ASC),
    INDEX `User_roleId_fkey`(`roleId` ASC),
    UNIQUE INDEX `User_username_key`(`username` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `useronbranch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branchId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `UserOnBranch_branchId_fkey`(`branchId` ASC),
    INDEX `UserOnBranch_userId_fkey`(`userId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yarn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contentId` INTEGER NOT NULL,
    `yarnTypeId` INTEGER NOT NULL,
    `countsId` INTEGER NOT NULL,
    `aliasName` VARCHAR(191) NOT NULL,
    `hsn` VARCHAR(191) NOT NULL,
    `taxPercent` DOUBLE NOT NULL DEFAULT 0,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `Yarn_companyId_fkey`(`companyId` ASC),
    INDEX `Yarn_contentId_fkey`(`contentId` ASC),
    INDEX `Yarn_countsId_fkey`(`countsId` ASC),
    INDEX `Yarn_yarnTypeId_fkey`(`yarnTypeId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yarnblend` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `YarnBlend_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yarnonyarnblend` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `yarnBlendId` INTEGER NOT NULL,
    `percentage` INTEGER NOT NULL,
    `yarnId` INTEGER NOT NULL,

    INDEX `YarnOnYarnBlend_yarnBlendId_fkey`(`yarnBlendId` ASC),
    INDEX `YarnOnYarnBlend_yarnId_fkey`(`yarnId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yarntype` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `YarnType_companyId_fkey`(`companyId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accessory` ADD CONSTRAINT `Accessory_accessoryItemId_fkey` FOREIGN KEY (`accessoryItemId`) REFERENCES `accessoryitem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accessory` ADD CONSTRAINT `Accessory_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accessorygroup` ADD CONSTRAINT `AccessoryGroup_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accessoryitem` ADD CONSTRAINT `AccessoryItem_accessoryGroupId_fkey` FOREIGN KEY (`accessoryGroupId`) REFERENCES `accessorygroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accessoryitem` ADD CONSTRAINT `AccessoryItem_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `branch` ADD CONSTRAINT `Branch_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `City_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `color` ADD CONSTRAINT `Color_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `content` ADD CONSTRAINT `Content_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `country` ADD CONSTRAINT `Country_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `counts` ADD CONSTRAINT `Counts_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `currency` ADD CONSTRAINT `Currency_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `department` ADD CONSTRAINT `Department_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `design` ADD CONSTRAINT `Design_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dia` ADD CONSTRAINT `Dia_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `Employee_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `Employee_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `Employee_employeeCategoryId_fkey` FOREIGN KEY (`employeeCategoryId`) REFERENCES `employeecategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `Employee_localCityId_fkey` FOREIGN KEY (`localCityId`) REFERENCES `city`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `Employee_permCityId_fkey` FOREIGN KEY (`permCityId`) REFERENCES `city`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employeecategory` ADD CONSTRAINT `EmployeeCategory_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fabric` ADD CONSTRAINT `Fabric_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fabric` ADD CONSTRAINT `Fabric_fabricTypeId_fkey` FOREIGN KEY (`fabricTypeId`) REFERENCES `fabrictype`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fabriconyarnblend` ADD CONSTRAINT `FabricOnYarnBlend_fabricId_fkey` FOREIGN KEY (`fabricId`) REFERENCES `fabric`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fabriconyarnblend` ADD CONSTRAINT `FabricOnYarnBlend_yarnBlendId_fkey` FOREIGN KEY (`yarnBlendId`) REFERENCES `yarnblend`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fabrictype` ADD CONSTRAINT `FabricType_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `finyear` ADD CONSTRAINT `FinYear_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gauge` ADD CONSTRAINT `Gauge_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gsm` ADD CONSTRAINT `Gsm_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hsn` ADD CONSTRAINT `Hsn_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `looplength` ADD CONSTRAINT `LoopLength_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `page` ADD CONSTRAINT `Page_pageGroupId_fkey` FOREIGN KEY (`pageGroupId`) REFERENCES `pagegroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `party` ADD CONSTRAINT `Party_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `city`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `party` ADD CONSTRAINT `Party_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `party` ADD CONSTRAINT `Party_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `party` ADD CONSTRAINT `Party_currencyId_fkey` FOREIGN KEY (`currencyId`) REFERENCES `currency`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `party` ADD CONSTRAINT `Party_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partycategory` ADD CONSTRAINT `PartyCategory_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partyonaccessoryitems` ADD CONSTRAINT `PartyOnAccessoryItems_accessoryItemId_fkey` FOREIGN KEY (`accessoryItemId`) REFERENCES `accessoryitem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partyonaccessoryitems` ADD CONSTRAINT `PartyOnAccessoryItems_partyId_fkey` FOREIGN KEY (`partyId`) REFERENCES `party`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payterm` ADD CONSTRAINT `PayTerm_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pinwardorreturn` ADD CONSTRAINT `PInwardOrReturn_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pinwardorreturn` ADD CONSTRAINT `PInwardOrReturn_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pinwardorreturn` ADD CONSTRAINT `PInwardOrReturn_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `party`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pinwardorreturn` ADD CONSTRAINT `PInwardOrReturn_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_deliveryBranchId_fkey` FOREIGN KEY (`deliveryBranchId`) REFERENCES `branch`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_deliveryPartyId_fkey` FOREIGN KEY (`deliveryPartyId`) REFERENCES `party`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_payTermId_fkey` FOREIGN KEY (`payTermId`) REFERENCES `payterm`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `party`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_taxTemplateId_fkey` FOREIGN KEY (`taxTemplateId`) REFERENCES `taxtemplate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po` ADD CONSTRAINT `Po_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role` ADD CONSTRAINT `Role_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roleonpage` ADD CONSTRAINT `RoleOnPage_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roleonpage` ADD CONSTRAINT `RoleOnPage_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `size` ADD CONSTRAINT `Size_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `state` ADD CONSTRAINT `State_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `Stock_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `Subscription_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taxtemplate` ADD CONSTRAINT `TaxTemplate_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taxtemplatedetails` ADD CONSTRAINT `TaxTemplateDetails_taxTemplateId_fkey` FOREIGN KEY (`taxTemplateId`) REFERENCES `taxtemplate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taxtemplatedetails` ADD CONSTRAINT `TaxTemplateDetails_taxTermId_fkey` FOREIGN KEY (`taxTermId`) REFERENCES `taxterm`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taxterm` ADD CONSTRAINT `TaxTerm_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unitofmeasurement` ADD CONSTRAINT `UnitOfMeasurement_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `useronbranch` ADD CONSTRAINT `UserOnBranch_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `useronbranch` ADD CONSTRAINT `UserOnBranch_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarn` ADD CONSTRAINT `Yarn_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarn` ADD CONSTRAINT `Yarn_contentId_fkey` FOREIGN KEY (`contentId`) REFERENCES `content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarn` ADD CONSTRAINT `Yarn_countsId_fkey` FOREIGN KEY (`countsId`) REFERENCES `counts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarn` ADD CONSTRAINT `Yarn_yarnTypeId_fkey` FOREIGN KEY (`yarnTypeId`) REFERENCES `yarntype`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarnblend` ADD CONSTRAINT `YarnBlend_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarnonyarnblend` ADD CONSTRAINT `YarnOnYarnBlend_yarnBlendId_fkey` FOREIGN KEY (`yarnBlendId`) REFERENCES `yarnblend`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarnonyarnblend` ADD CONSTRAINT `YarnOnYarnBlend_yarnId_fkey` FOREIGN KEY (`yarnId`) REFERENCES `yarn`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarntype` ADD CONSTRAINT `YarnType_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

