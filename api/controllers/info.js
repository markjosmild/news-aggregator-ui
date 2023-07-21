const knex = require("../database/knex");
const Joi = require("joi");

const infoSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(0).max(150).required(),
  address: Joi.string().min(5).required(),
});

const contactSchema = Joi.object({
  email: Joi.string().min(10).required(),
  phone: Joi.number().min(11).required(),
  userId: Joi.number().min(1).required(),
});

const getBasicInfos = async (ctx) => {
  const infos = await knex("basic_info");
  ctx.body = infos;
};

const getInfos = async (ctx) => {
  try {
    const mergeInfos = await knex("basic_info").join("contact_info", {
      "basic_info.id": "contact_info.userId",
    });
    ctx.body = mergeInfos;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  }
};

const findContact = async (ctx) => {
  try {
    const row = await knex("contact_info")
      .where("userId", ctx.request.params.userId)
      .first();
    ctx.body = row;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error };
  }
};

const postInfo = async (ctx) => {
  try {
    await infoSchema.validateAsync(ctx.request.body);
    const [id] = await knex("basic_info").insert({
      name: ctx.request.body.name,
      age: ctx.request.body.age,
      address: ctx.request.body.address,
    });
    ctx.body = { message: `Data received. Your userId is: ${id}`, userId: id };
  } catch (error) {
    ctx.status = 500;
    if (!error.code) return (ctx.body = { error: error.details[0].message });
    console.log(error.sqlMessage);
    ctx.body = { error: error.sqlMessage };
  }
};

const postContact = async (ctx) => {
  try {
    await contactSchema.validateAsync(ctx.request.body);
    await knex("contact_info").insert({
      email: ctx.request.body.email,
      phone: ctx.request.body.phone,
      userId: ctx.request.body.userId,
    });
    ctx.body = { message: "Data received" };
  } catch (error) {
    ctx.status = 500;
    if (!error.code) return (ctx.body = { error: error.details[0].message });
    ctx.body = { error: error.sqlMessage };
  }
};

const updateContact = async (ctx) => {
  try {
    await contactSchema.validateAsync(ctx.request.body);
    await knex("contact_info")
      .where("userId", ctx.request.body.userId)
      .update({ email: ctx.request.body.email, phone: ctx.request.body.phone });
    ctx.body = { message: "Contact updated succesfully" };
  } catch (error) {
    ctx.status = 500;
    if (!error.code) return (ctx.body = { error: error.details[0].message });
    ctx.body = { error: error.sqlMessage };
  }
};

module.exports = {
  getInfos,
  postInfo,
  postContact,
  getBasicInfos,
  findContact,
  updateContact,
};
