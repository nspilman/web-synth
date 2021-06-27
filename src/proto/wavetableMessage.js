/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.n8jswebsynth = (function() {

    /**
     * Namespace n8jswebsynth.
     * @exports n8jswebsynth
     * @namespace
     */
    var n8jswebsynth = {};

    /**
     * DataType enum.
     * @name n8jswebsynth.DataType
     * @enum {number}
     * @property {number} TIME=0 TIME value
     * @property {number} FREQUENCY=1 FREQUENCY value
     */
    n8jswebsynth.DataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TIME"] = 0;
        values[valuesById[1] = "FREQUENCY"] = 1;
        return values;
    })();

    n8jswebsynth.TimeData = (function() {

        /**
         * Properties of a TimeData.
         * @memberof n8jswebsynth
         * @interface ITimeData
         * @property {number|null} [sampleRate] TimeData sampleRate
         * @property {Array.<number>|null} [data] TimeData data
         */

        /**
         * Constructs a new TimeData.
         * @memberof n8jswebsynth
         * @classdesc Represents a TimeData.
         * @implements ITimeData
         * @constructor
         * @param {n8jswebsynth.ITimeData=} [properties] Properties to set
         */
        function TimeData(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeData sampleRate.
         * @member {number} sampleRate
         * @memberof n8jswebsynth.TimeData
         * @instance
         */
        TimeData.prototype.sampleRate = 0;

        /**
         * TimeData data.
         * @member {Array.<number>} data
         * @memberof n8jswebsynth.TimeData
         * @instance
         */
        TimeData.prototype.data = $util.emptyArray;

        /**
         * Creates a new TimeData instance using the specified properties.
         * @function create
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {n8jswebsynth.ITimeData=} [properties] Properties to set
         * @returns {n8jswebsynth.TimeData} TimeData instance
         */
        TimeData.create = function create(properties) {
            return new TimeData(properties);
        };

        /**
         * Encodes the specified TimeData message. Does not implicitly {@link n8jswebsynth.TimeData.verify|verify} messages.
         * @function encode
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {n8jswebsynth.ITimeData} message TimeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sampleRate != null && Object.hasOwnProperty.call(message, "sampleRate"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.sampleRate);
            if (message.data != null && message.data.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.data.length; ++i)
                    writer.double(message.data[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TimeData message, length delimited. Does not implicitly {@link n8jswebsynth.TimeData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {n8jswebsynth.ITimeData} message TimeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeData message from the specified reader or buffer.
         * @function decode
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {n8jswebsynth.TimeData} TimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.n8jswebsynth.TimeData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sampleRate = reader.double();
                    break;
                case 2:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.double());
                    } else
                        message.data.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimeData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {n8jswebsynth.TimeData} TimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeData message.
         * @function verify
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                if (typeof message.sampleRate !== "number")
                    return "sampleRate: number expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i)
                    if (typeof message.data[i] !== "number")
                        return "data: number[] expected";
            }
            return null;
        };

        /**
         * Creates a TimeData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {n8jswebsynth.TimeData} TimeData
         */
        TimeData.fromObject = function fromObject(object) {
            if (object instanceof $root.n8jswebsynth.TimeData)
                return object;
            var message = new $root.n8jswebsynth.TimeData();
            if (object.sampleRate != null)
                message.sampleRate = Number(object.sampleRate);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".n8jswebsynth.TimeData.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i)
                    message.data[i] = Number(object.data[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TimeData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof n8jswebsynth.TimeData
         * @static
         * @param {n8jswebsynth.TimeData} message TimeData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults)
                object.sampleRate = 0;
            if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                object.sampleRate = options.json && !isFinite(message.sampleRate) ? String(message.sampleRate) : message.sampleRate;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = options.json && !isFinite(message.data[j]) ? String(message.data[j]) : message.data[j];
            }
            return object;
        };

        /**
         * Converts this TimeData to JSON.
         * @function toJSON
         * @memberof n8jswebsynth.TimeData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeData;
    })();

    n8jswebsynth.FrequencyData = (function() {

        /**
         * Properties of a FrequencyData.
         * @memberof n8jswebsynth
         * @interface IFrequencyData
         * @property {Array.<number>|null} [real] FrequencyData real
         * @property {Array.<number>|null} [imag] FrequencyData imag
         */

        /**
         * Constructs a new FrequencyData.
         * @memberof n8jswebsynth
         * @classdesc Represents a FrequencyData.
         * @implements IFrequencyData
         * @constructor
         * @param {n8jswebsynth.IFrequencyData=} [properties] Properties to set
         */
        function FrequencyData(properties) {
            this.real = [];
            this.imag = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FrequencyData real.
         * @member {Array.<number>} real
         * @memberof n8jswebsynth.FrequencyData
         * @instance
         */
        FrequencyData.prototype.real = $util.emptyArray;

        /**
         * FrequencyData imag.
         * @member {Array.<number>} imag
         * @memberof n8jswebsynth.FrequencyData
         * @instance
         */
        FrequencyData.prototype.imag = $util.emptyArray;

        /**
         * Creates a new FrequencyData instance using the specified properties.
         * @function create
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {n8jswebsynth.IFrequencyData=} [properties] Properties to set
         * @returns {n8jswebsynth.FrequencyData} FrequencyData instance
         */
        FrequencyData.create = function create(properties) {
            return new FrequencyData(properties);
        };

        /**
         * Encodes the specified FrequencyData message. Does not implicitly {@link n8jswebsynth.FrequencyData.verify|verify} messages.
         * @function encode
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {n8jswebsynth.IFrequencyData} message FrequencyData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrequencyData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.real != null && message.real.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.real.length; ++i)
                    writer.double(message.real[i]);
                writer.ldelim();
            }
            if (message.imag != null && message.imag.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.imag.length; ++i)
                    writer.double(message.imag[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified FrequencyData message, length delimited. Does not implicitly {@link n8jswebsynth.FrequencyData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {n8jswebsynth.IFrequencyData} message FrequencyData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrequencyData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FrequencyData message from the specified reader or buffer.
         * @function decode
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {n8jswebsynth.FrequencyData} FrequencyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrequencyData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.n8jswebsynth.FrequencyData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.real && message.real.length))
                        message.real = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.real.push(reader.double());
                    } else
                        message.real.push(reader.double());
                    break;
                case 2:
                    if (!(message.imag && message.imag.length))
                        message.imag = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.imag.push(reader.double());
                    } else
                        message.imag.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FrequencyData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {n8jswebsynth.FrequencyData} FrequencyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrequencyData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FrequencyData message.
         * @function verify
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FrequencyData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.real != null && message.hasOwnProperty("real")) {
                if (!Array.isArray(message.real))
                    return "real: array expected";
                for (var i = 0; i < message.real.length; ++i)
                    if (typeof message.real[i] !== "number")
                        return "real: number[] expected";
            }
            if (message.imag != null && message.hasOwnProperty("imag")) {
                if (!Array.isArray(message.imag))
                    return "imag: array expected";
                for (var i = 0; i < message.imag.length; ++i)
                    if (typeof message.imag[i] !== "number")
                        return "imag: number[] expected";
            }
            return null;
        };

        /**
         * Creates a FrequencyData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {n8jswebsynth.FrequencyData} FrequencyData
         */
        FrequencyData.fromObject = function fromObject(object) {
            if (object instanceof $root.n8jswebsynth.FrequencyData)
                return object;
            var message = new $root.n8jswebsynth.FrequencyData();
            if (object.real) {
                if (!Array.isArray(object.real))
                    throw TypeError(".n8jswebsynth.FrequencyData.real: array expected");
                message.real = [];
                for (var i = 0; i < object.real.length; ++i)
                    message.real[i] = Number(object.real[i]);
            }
            if (object.imag) {
                if (!Array.isArray(object.imag))
                    throw TypeError(".n8jswebsynth.FrequencyData.imag: array expected");
                message.imag = [];
                for (var i = 0; i < object.imag.length; ++i)
                    message.imag[i] = Number(object.imag[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FrequencyData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof n8jswebsynth.FrequencyData
         * @static
         * @param {n8jswebsynth.FrequencyData} message FrequencyData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FrequencyData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.real = [];
                object.imag = [];
            }
            if (message.real && message.real.length) {
                object.real = [];
                for (var j = 0; j < message.real.length; ++j)
                    object.real[j] = options.json && !isFinite(message.real[j]) ? String(message.real[j]) : message.real[j];
            }
            if (message.imag && message.imag.length) {
                object.imag = [];
                for (var j = 0; j < message.imag.length; ++j)
                    object.imag[j] = options.json && !isFinite(message.imag[j]) ? String(message.imag[j]) : message.imag[j];
            }
            return object;
        };

        /**
         * Converts this FrequencyData to JSON.
         * @function toJSON
         * @memberof n8jswebsynth.FrequencyData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FrequencyData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FrequencyData;
    })();

    n8jswebsynth.WavetableMessage = (function() {

        /**
         * Properties of a WavetableMessage.
         * @memberof n8jswebsynth
         * @interface IWavetableMessage
         * @property {string} name WavetableMessage name
         * @property {n8jswebsynth.DataType} dataType WavetableMessage dataType
         * @property {n8jswebsynth.ITimeData|null} [timeData] WavetableMessage timeData
         * @property {n8jswebsynth.IFrequencyData|null} [frequencyData] WavetableMessage frequencyData
         */

        /**
         * Constructs a new WavetableMessage.
         * @memberof n8jswebsynth
         * @classdesc Represents a WavetableMessage.
         * @implements IWavetableMessage
         * @constructor
         * @param {n8jswebsynth.IWavetableMessage=} [properties] Properties to set
         */
        function WavetableMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WavetableMessage name.
         * @member {string} name
         * @memberof n8jswebsynth.WavetableMessage
         * @instance
         */
        WavetableMessage.prototype.name = "";

        /**
         * WavetableMessage dataType.
         * @member {n8jswebsynth.DataType} dataType
         * @memberof n8jswebsynth.WavetableMessage
         * @instance
         */
        WavetableMessage.prototype.dataType = 0;

        /**
         * WavetableMessage timeData.
         * @member {n8jswebsynth.ITimeData|null|undefined} timeData
         * @memberof n8jswebsynth.WavetableMessage
         * @instance
         */
        WavetableMessage.prototype.timeData = null;

        /**
         * WavetableMessage frequencyData.
         * @member {n8jswebsynth.IFrequencyData|null|undefined} frequencyData
         * @memberof n8jswebsynth.WavetableMessage
         * @instance
         */
        WavetableMessage.prototype.frequencyData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * WavetableMessage data.
         * @member {"timeData"|"frequencyData"|undefined} data
         * @memberof n8jswebsynth.WavetableMessage
         * @instance
         */
        Object.defineProperty(WavetableMessage.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["timeData", "frequencyData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WavetableMessage instance using the specified properties.
         * @function create
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {n8jswebsynth.IWavetableMessage=} [properties] Properties to set
         * @returns {n8jswebsynth.WavetableMessage} WavetableMessage instance
         */
        WavetableMessage.create = function create(properties) {
            return new WavetableMessage(properties);
        };

        /**
         * Encodes the specified WavetableMessage message. Does not implicitly {@link n8jswebsynth.WavetableMessage.verify|verify} messages.
         * @function encode
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {n8jswebsynth.IWavetableMessage} message WavetableMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WavetableMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dataType);
            if (message.timeData != null && Object.hasOwnProperty.call(message, "timeData"))
                $root.n8jswebsynth.TimeData.encode(message.timeData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.frequencyData != null && Object.hasOwnProperty.call(message, "frequencyData"))
                $root.n8jswebsynth.FrequencyData.encode(message.frequencyData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WavetableMessage message, length delimited. Does not implicitly {@link n8jswebsynth.WavetableMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {n8jswebsynth.IWavetableMessage} message WavetableMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WavetableMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WavetableMessage message from the specified reader or buffer.
         * @function decode
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {n8jswebsynth.WavetableMessage} WavetableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WavetableMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.n8jswebsynth.WavetableMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.dataType = reader.int32();
                    break;
                case 3:
                    message.timeData = $root.n8jswebsynth.TimeData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.frequencyData = $root.n8jswebsynth.FrequencyData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("dataType"))
                throw $util.ProtocolError("missing required 'dataType'", { instance: message });
            return message;
        };

        /**
         * Decodes a WavetableMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {n8jswebsynth.WavetableMessage} WavetableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WavetableMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WavetableMessage message.
         * @function verify
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WavetableMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (!$util.isString(message.name))
                return "name: string expected";
            switch (message.dataType) {
            default:
                return "dataType: enum value expected";
            case 0:
            case 1:
                break;
            }
            if (message.timeData != null && message.hasOwnProperty("timeData")) {
                properties.data = 1;
                {
                    var error = $root.n8jswebsynth.TimeData.verify(message.timeData);
                    if (error)
                        return "timeData." + error;
                }
            }
            if (message.frequencyData != null && message.hasOwnProperty("frequencyData")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.n8jswebsynth.FrequencyData.verify(message.frequencyData);
                    if (error)
                        return "frequencyData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WavetableMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {n8jswebsynth.WavetableMessage} WavetableMessage
         */
        WavetableMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.n8jswebsynth.WavetableMessage)
                return object;
            var message = new $root.n8jswebsynth.WavetableMessage();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.dataType) {
            case "TIME":
            case 0:
                message.dataType = 0;
                break;
            case "FREQUENCY":
            case 1:
                message.dataType = 1;
                break;
            }
            if (object.timeData != null) {
                if (typeof object.timeData !== "object")
                    throw TypeError(".n8jswebsynth.WavetableMessage.timeData: object expected");
                message.timeData = $root.n8jswebsynth.TimeData.fromObject(object.timeData);
            }
            if (object.frequencyData != null) {
                if (typeof object.frequencyData !== "object")
                    throw TypeError(".n8jswebsynth.WavetableMessage.frequencyData: object expected");
                message.frequencyData = $root.n8jswebsynth.FrequencyData.fromObject(object.frequencyData);
            }
            return message;
        };

        /**
         * Creates a plain object from a WavetableMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof n8jswebsynth.WavetableMessage
         * @static
         * @param {n8jswebsynth.WavetableMessage} message WavetableMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WavetableMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.dataType = options.enums === String ? "TIME" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = options.enums === String ? $root.n8jswebsynth.DataType[message.dataType] : message.dataType;
            if (message.timeData != null && message.hasOwnProperty("timeData")) {
                object.timeData = $root.n8jswebsynth.TimeData.toObject(message.timeData, options);
                if (options.oneofs)
                    object.data = "timeData";
            }
            if (message.frequencyData != null && message.hasOwnProperty("frequencyData")) {
                object.frequencyData = $root.n8jswebsynth.FrequencyData.toObject(message.frequencyData, options);
                if (options.oneofs)
                    object.data = "frequencyData";
            }
            return object;
        };

        /**
         * Converts this WavetableMessage to JSON.
         * @function toJSON
         * @memberof n8jswebsynth.WavetableMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WavetableMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WavetableMessage;
    })();

    return n8jswebsynth;
})();

module.exports = $root;
